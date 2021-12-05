---
title: 'Dynamic Routing and Static Generation'
excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet nulla facilities morbi tempus.'
coverImage: '/assets/blog/dynamic-routing/cover.jpg'
date: '2020-03-16T05:35:07.322Z'
author:
  name: JJ Kasper
  picture: '/assets/blog/authors/jj.jpeg'
ogImage:
  url: '/assets/blog/dynamic-routing/cover.jpg'
---

# Parâmetros opcionais no Dart

No Dart, existem duas maneiras de especificar parâmetros opcionais: eles podem ser posicionais ou nomeados.

Parâmetros opcionais são parâmetros que não precisam ser especificados ao chamar uma determinada função. Os parâmetros opcionais devem ser declarados após os parâmetros necessários. Além disso, os parâmetros opcionais podem ter um valor padrão, que é usado quando a invocação da função não o especifica.

## Parâmetros posicionais

Para especificar um parâmetros posicionais opcionais no Dart é usaos os
colchetes [], todos os parêmetros dentro dos colchetes não são obrigatorios.

```dart class=language-dart
void readFile(String name, [String mode, String charset = 'utf-8' ]) {
  // ...
}
```

Além de ser um parametro opcional, o Dart oferece a posibilidade de atribuir um valor padrão caso ele não sejá especificado 
Para tal declaração, o nome é sempre necessário, enquanto o modo e o conjunto de caracteres são opcionais. Além disso, o conjunto de caracteres padrão será utf-8 se não for especificado. Esses parâmetros são posicionais, porque você não pode omitir o modo se quiser especificar o conjunto de caracteres do arquivo.

```dart class=language-dart
readFile('hello.dart');
readFile('hello.dart', 'w+');
readFile('hello.dart', 'w+', 'iso8859-1');
```
Additionally, the parameter names are specified and visible only at the level of the function declaration. The function caller must know which position corresponds to which parameter. This leads to a slightly less readable code.