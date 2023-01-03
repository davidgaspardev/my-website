---
title: 'Parâmetros opcionais no Dart'
excerpt: 'Parâmetros, um tipo especial de variável usado em em funções ou métodos, tão importante para o funcionamento de um sistema, tanto simple quanto complexo... E os parametros opcionais, qual é seu lugar ?'
date: '2020-03-16T05:35:07.322Z'
author:
  name: David Gaspar
  picture: 'https://firebasestorage.googleapis.com/v0/b/myself-dg.appspot.com/o/extras%2Fgithub-dvd.jpg?alt=media&token=eb935d89-9274-4c49-9ac4-7cb808cde049'
ogImage:
  url: 'https://firebasestorage.googleapis.com/v0/b/myself-dg.appspot.com/o/my-website%2FoptionalParameters.png?alt=media&token=fe276d41-d20e-4e7f-a13b-7302a1508b2c'
labels:
  - portugues
  - dart
---

<img src="https://firebasestorage.googleapis.com/v0/b/myself-dg.appspot.com/o/my-website%2FoptionalParameters.png?alt=media&token=fe276d41-d20e-4e7f-a13b-7302a1508b2c" />

# Parâmetros opcionais no Dart

Parâmetros opcionais são parâmetros que não precisam ser inicializados ao chamar uma determinada função ou método. Os parâmetros opcionais devem ser declarados após os parâmetros obrigatórios caso existam.

Na linguagem de programção Dart, existem duas maneiras de definir parâmetros opcionais, elas podem ser **posicionais** ou **nomeadas**. Além disso, os parâmetros opcionais podem possuir valores padrões, que são usados quando não são inicializados na chamada da função/método.

Os valores padrões possibilitam uma seguraça para o escopo de funções/métodos que não lidam com variáveis nullables.

## Parâmetros posicionais

Para definir parâmetros posicionais opcionais no Dart é usaos os
**colchetes** `[]`, todos os parêmetros dentro dos colchetes não são obrigatorios.

```dart class=language-dart
void readFile(String name, [ String? mode, String charset = 'utf-8' ]) {
  // Code here ...
}
```

Além de ser um parâmetro opcional, o Dart oferece a posibilidade de atribuir um valor padrão caso ele não sejá especificado na chamada da função, como pode ver no exemplo acima com o parâmetro **charset**. Caso **charset** não sejá inicializado na chamada, o valor dele será `'utf-8'`.

Esses parâmetros são posicionais, porque você não pode omitir o modo se quiser especificar o charset do arquivo.

```dart class=language-dart
// All possible calls to the function 
readFile('hello.dart');
readFile('hello.dart', 'w+');
readFile('hello.dart', 'w+', 'iso8859-1');
```

Obs: os nomes dos parâmetros são especificados e visíveis apenas no nível da declaração da função, portando o chamador da função deve saber qual posição corresponse a qual parâmetro. Isso leva a um código um pouco menos legível.

## Parâmetros nomeados

Para definir parâmetros nomeados opcionais no Dart é usados as **chaves** `{}`, todos os parâmetros dentro das chaves não são obrigatorios na chamada da função.

```dart class=language-dart
void readFile(String name, { String? mode, String charset = 'utf-8' }) {
  // Code here ...
}
```

Igualmente ao caso anterior com os colchetes, parâmetros nomeados também podem declarar um valor padrão, caso o parametro não seja inicializado na chamada da função. 

E diferente dos colchetes, as ordem dos parametros opcionais são dinâmicas, é preciso apenas espeficar o nome do parâmetros para então atribuir o valor, por isso é chamado de parâmetros nomeados.

```dart class=language-dart
// All possible calls to the function 
readFile('hello.dart');
readFile('hello.dart', mode: 'w+');
readFile('hello.dart', charset: 'iso8859-1');
readFile('hello.dart', mode: 'w+', charset: 'iso8859-1');
readFile('hello.dart', charset: 'iso8859-1', mode: 'w+');
```