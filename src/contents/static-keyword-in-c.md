---
title: 'static keyword em C'
excerpt: 'Na programação já vimos muito a palavra static, muito vezes elas compartilham o mesmo propósito (eu acho), mas não se enganem, para cada linguagem pode existir suas pecualidades ou discrepancia.'
date: '2020-03-23T13:54:08.322Z'
author:
    name: David Gaspar
    picture: 'https://firebasestorage.googleapis.com/v0/b/myself-dg.appspot.com/o/extras%2Fgithub-dvd.jpg?alt=media&token=eb935d89-9274-4c49-9ac4-7cb808cde049'
labels:
    - portugues
    - C
---

# C e sua static keyword

Na linguagem de programação C existem 32 keywords suportadas, e uma delas é chamada de static. Static é uma keyword de declaração, ela pode ser usada tanto em declaração de variveis quanto de funções (em C++ ela pode ser usadas em atributos e metodos) e dependendo de seu escopo, ela faz coisas diferentes.

> Obs: Static no C é diferente do que uma static no Java, em C ele atua com visibilidade em escopo global e persistência em escopo local.

## Static usadas em escopo global

O static usado em variveis globais ou em funções atuam da mesma forma, como um limitador de visualização no escopo do programa (processo), quando declarado como static essa varivel ou função só será acessivel proprio arquivo de objeto (**object file**) que estão.

### Exemplo usando static em escopo global

No exemplo abaixo, iremos gerar dois arquivos de objectos em C. Um será `data.o` correspondete ao arquivo fonte `data.c`, e o outro será `main.o` correspondete ao aquivo fonte `main.c`. (main possue a **funcão principal** para gerar executaveis).

No arquivo data iremos declarar static para uma variavel global e uma função e iremos chama-los no main.

File: `data.c`

```c
#include "data.h"

static int my_age = 23; // define and re-declaring
int his_age = 24;       // define and re-declaring

int sum_ages() {
    return my_age + his_age;
}                       // define and re-declaring
```

File: `data.h`

```c
#ifndef DATA_H_
#define DATA_H_

static int my_age; // declaring
int his_age;       // declaring
int sum_ages();    // declaring

#endif
```

File: `main.c`
```c
#include <stdio.h>
#include "data.h"

int main() {
    printf("my_age: %d \n", my_age);
    printf("his_age: %d \n", his_age);
    return 0;
}
```

Gerar o arquivo de objeto (.o) para cada arquivo fonte (.c), e vincula-los (linker) oara gerar um executavel:

```bash
$ clang -c data.c -o data.o
$ clang -c main.c -o main.o
$ clang -o static main.o data.o
```

## Static em variveis locais

O static usado em variveis local, no caso escopado em uma função, defini que essa varivel local irá persister seu valor duranto toda o programa, tornando ela global sem ser visivel globalmente, apenas do escopo que ela foi declarada.

### Exemplo com static em variveis locais 

File: `test_without_static.c`

```c
#include <stdio.h>

int increment(int qty) {
    int total = 0; // Without static
    total += qty;
    return total;
}

int main() {
    int result = 1;
    result = increment(1);
    result = increment(4);
    result = increment(3);
    result = increment(6);

    printf("result: %d \n", result);

    return 0;
}
```

```bash
$ gcc test_without_static.c -o main
$ ./main
result: 6
```

File: `test_with_static.c`

```c
#include <stdio.h>

int increment(int qty) {
    static int total = 0; // With static
    total += qty;
    return total;
}

int main() {
    int result = 1;
    result = increment(1);
    result = increment(4); // increment in total varivel (static)
    result = increment(3); // increment in total varivel (static)
    result = increment(6); // increment in total varivel (static)

    printf("result: %d \n", result);

    return 0;
}
```

```bash
$ gcc test_with_static.c -o main
$ ./main
result: 14
```

