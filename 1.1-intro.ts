// por não ser tipada nos dá melhores feedbacks de erro:

function reverse(str: string){
    return str.split('').reverse().join('')

}

const result = reverse('hello')

// melhor autocomplete 

const reversed = reverse('ninja')

// custom type

interface MenuType {
    title: string
    const: number
}

function printMenu(item: MenuType){
    console.log(item.title, ':', item.const)
}