var customerName = 'bob'
const LeastFavoriteCustomer = 'greg'

function upperCaseCustomerName(){
    customerName = customerName.toUpperCase()
}

function setBestCustomer(){
    window.bestCustomer = ('not bob')
}

function overwriteBestCustomer(){
    bestCustomer = 'maybe bob'
}

function changeLeastFavoriteCustomer(){
    LeastFavoriteCustomer = 'not greg'
}

