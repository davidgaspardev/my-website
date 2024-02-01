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


Como mencionado na seção sobre Ownership, não é possível ter duas variáveis apontando simultaneamente para o mesmo endereço de memória. No entanto, Rust permite o empréstimo de referências, conhecido como Borrowing. Isso possibilita o uso temporário de um valor sem assumir sua posse. Esse conceito é fundamental para garantir a segurança da memória sem a necessidade de um Garbage Collector.

Aqui está um exemplo de borrowing:

```rust
fn main() {
    let my_name = String::from("David Gaspar");
    show_my_name(&my_name);
    // my_name ainda pode ser usada aqui, pois foi apenas emprestada
    println!("Na main, my_name é: {}", my_name);
}

fn show_my_name(name: &String) {
    println!("Hi, my name is {}", name);
}
```

Neste exemplo, show_my_name toma uma referência para my_name ao invés de tomar posse dela. Isso permite que my_name seja usada depois que show_my_name é chamada.

## Lifetimes

Diferentemente do empréstimo (borrowing), que foca no uso temporário de um valor, lifetimes em Rust são conceitos usados pelo compilador para garantir que todos os empréstimos sejam válidos durante toda a sua duração. O lifetime de uma variável começa quando ela é criada e termina quando é destruída. Importante destacar que lifetimes e escopos, apesar de relacionados, não são idênticos.

Por exemplo, ao emprestarmos uma variável com `&`, o empréstimo tem um lifetime definido pela declaração. O empréstimo é válido enquanto não exceder a destruição do objeto emprestado. O escopo do empréstimo, por outro lado, é determinado pelo uso da referência.

Consideremos o seguinte código:

```rust
fn main() {
    let r;                // ---------+-- 'a
                          //          |
    {                     //          |
        let x = 5;        // -+-- 'b  |
        r = &x;           //  |       |
    }                     // -+       |
                          //          |
    println!("r: {}", r); //          |
}                         // ---------+
```

Aqui, o lifetime de `x` é mais curto do que o de `r`. Tentar usar `r` após o fim do escopo de `x` resulta em erro, pois o lifetime de `x` terminou antes do uso de `r`. Os lifetimes ajudam o compilador a assegurar que não existam referências para dados já desalocados.