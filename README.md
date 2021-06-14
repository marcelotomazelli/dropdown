# Dropdown
É um Dropdown simples construído com Sass e jQuery.

## :file_folder: Conteúdo

São necessários somente os arquivos com estilos e scripts para habilitar o Dropdown.

### Estilo

É possível compilar os aquivos Sass disponíveis para configurar o que deseja. Por padrão o arquivo compilado terá o nome de "dropdown.css".

> main/sass/dropdown.scss

### Scripts

O Dropdown depende de dois scripts, são eles o [jQuery (3.6.0)](https://cdnjs.com/libraries/jquery) e o arquivo de classe do Dropdown.

> jquery.min.js<br>
> main/js/dropdown.js

## :open_book: Regras

### Classes de estilo
Toda classe CSS vai utilizar um prefixo, nomeado de `classe-base`, para indicar o uso das classes do Dropdown. A `classe-base` por padrão é "mt-dropdown", mas pode ser configurada nas variáveis do Sass.

### Estrutura dos elementos
São necessários três elementos, são eles o principal, o botão e o menu. O principal contém os outros dois como seus elementos filhos.<br>
Obs: o botão necessariamente precisa ser com a tag "button", devido ao evento "focus" que ele possui.

### Identificadores (IDs)
Ao instanciar o `Dropdown` no JavaScript, o construtor da classe espera o id do elemento principal (`id-principal`). Ele utilizará esse id para capturar o elemento principal e o elemento menu. O menu por sua vez, deve receber como id o `id-principal` seguido de "-menu" como sufixo.

> Na [documentação](https://marcelotomazelli.github.io/dropdown) há um modelo de como devem ser estruturados os elementos para o Dropdown funcionar.

### Habilitá-lo

No JavaScript a linha de código seria:

```javascript
let dropdown = new Dropdown("<id-principal>");
```

A partir disso nenhuma outra ação é necessária.

## :arrow_lower_right: Posicionamento

Esse Dropdown é posicionado a partir de classes CSS predefinidas. Também é possível adaptá-lo à diferentes mídias através de classes responsivas que podem ser habilitadas no Sass. Quanto à nomenclatura, se a `classe-base` for "mt-dropdown" então a posição será construída como "mt-dropdown-pb", por exemplo, e essa classe representa `bottom`.

A partir da `classe-base` são dados as seguintes classes para posicionamento, a primeira letra refere-se a "direction" e a segunda ao "alignment":

```
pt  ├─ top
pts ├─ top start
pte ├─ top end
pb  ├─ bottom
pbs ├─ bottom start
pbe ├─ bottom end
ps  ├─ start
pst ├─ start top
psb ├─ start bottom
pe  ├─ end
pet ├─ end top
peb ├─ end bottom
```

## :v: Direitos

Desenvolvido e publicado por [Marcelo Tomazelli](https://github.com/marcelotomazelli).
