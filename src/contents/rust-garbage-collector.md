---
title: 'Como Rust matou o Garbage Collector'
excerpt: 'A linguagem de programação Rust é uma das poucas linguagem que não precisa de um Garbage Collector para limpar memoria'
coverImage: '/assets/blog/preview/cover.jpg'
date: '2020-03-16T05:35:07.322Z'
author:
  name: David Gaspar
  picture: 'https://firebasestorage.googleapis.com/v0/b/myself-dg.appspot.com/o/extras%2Fgithub-dvd.jpg?alt=media&token=eb935d89-9274-4c49-9ac4-7cb808cde049'
ogImage:
  url: '/assets/blog/preview/cover.jpg'
---

# Como Rust matou o Garbage Collector

Rust é uma das poucas linguagens de programação que eu conheço que não possui Garbage Collector, e dentro das quais eu conheço está C/C++, Swift, Fortran e Pascal. Para o Rust não precisar de um Garbage Collector e ainda sim facilitar o trabalho do programador, foram adotados mecanismos para suprir a nescessidade de gerenciar memoria, sendo elas as seguintes: Ownership, Borrowing e Lifetimes (juntos esses três mecanismos se complatam).

## Ownership

O ownership indica que só existe um **proprietario** daquela variável da memoria heap, permitindo assim uma maior segurança para não deixar fios soltos na programação impedido copias de endereço de memoria. Nunca irá ter dois variaveis apontando para o mesmo endereço da heap, mas no maximo irá ter **tranferencia** para um novo proprietario, e assim o antigo proprietario é inutilizavel.

Segue abaixo um exemplo de transferia de proprietario (ownership):

```rust
fn main() {
    // s1 owns the string "hello"
    let s1 = String::from("hello");
    // ownership of the string is transferred from s1 to s2 
    let s2 = s1;                   

    // println!("{}", s1); -> This line would result in a compile-time error
    // This line is okay as s2 now owns the string
    println!("{}", s2);             
}
```

## Borrowing

Como citado na Ownership, não é possivel ter duas variveis com a mesma referencia, mas é possivel empresta a referencia para outra variveis e isso é chamado de Borrowing.

```rust
fn main() {
  let my_name = String::from("David Gaspar");

  
}

fn showMyName(my_name: String) {
  println!("Hi, my name is {}", my_name);
}
```

## Lifetimes
