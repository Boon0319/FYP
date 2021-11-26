

var button = document.querySelector('.submit')
var result= document.querySelector('.data');
var featuredQuery = ""
var querySwitch = ""
var nameQuery = ""
var companyQuery = ""

var andOp = ""
var numericQuery = ""
var priceValue = ""
var limitQuery = ""
var pageQuery = ""
var goCheck = true




button.addEventListener('click', function(name){
    
    checkFeatured()
    checkName()
    checkCompany()
    
    checkFilter()
    checkLimit()
    checkPage()
    
    
    if(goCheck = true){

        fetch('/api/v1/products?'+querySwitch+featuredQuery+nameQuery+companyQuery+numericQuery+limitQuery+pageQuery ,{
            method: 'GET'
        })
        .then(response => response.json())
        /*
        .then(data => console.log(data)
        
        )
        */
        
        .then(data => {
            var nameValue = JSON.stringify(data['products'],null,2) 
        
            result.innerHTML = nameValue
    
        }
        )
        
        
        
        .catch(err => console.log(err));
    }
    
    
    
    
    
    console.log('/api/v1/products?'+querySwitch+featuredQuery+nameQuery+companyQuery+numericQuery+limitQuery+pageQuery)
    console.log(errorCheck)







})

function checkFeatured(){
    if(document.getElementById('true').checked){
        featuredQuery = "featured=true&"
        
        
    }
    if(document.getElementById('false').checked){
        featuredQuery = "featured=false&"
        
    }
    if(document.getElementById('none').checked){
        featuredQuery = ""
        
    }
    
}

function checkName(){
    var nameInput = document.getElementById('nameInput').value
    if(nameInput != ""){
        nameQuery = "name="+nameInput +"&"
        
    }
    if(nameInput == ""){
        nameQuery = ""
    }
}



function checkCompany(){
    var companyInput = document.getElementById('company').value
    if(companyInput != ""){
        companyQuery = "company="+companyInput +"&"
        
    }
    if(companyInput == ""){
        companyQuery = ""
    }
}

function checkFilter(){
    var priceInput = document.getElementById('price').value
    priceValue = document.getElementById("price-condition").value
    var ratingInput = document.getElementById('rating').value
    ratingValue = document.getElementById("rating-condition").value
    if(priceInput != "" && priceValue != "none" && ratingInput == "" && ratingValue == "none"){
    numericQuery = "numericFilters=price" + priceValue + priceInput + "&" 
    goCheck = true
    } 
    else if(priceInput == "" && priceValue != "none"){
        alert("Price input is empty")
        goCheck = false
    }
    else if(priceInput != "" && priceValue == "none"){
        alert("Price condition has not been selected yet")
        goCheck = false
    }
    else if(priceInput !=null && priceValue != "none" && ratingInput != "" && ratingValue !="none"){
    numericQuery = "numericFilters=price" + priceValue + priceInput + ",rating" + ratingValue + ratingInput + "&"
    goCheck = true
    }
    else if(ratingInput == "" && ratingValue != "none"){
        alert("Rating input is empty")
        goCheck = false
        
    }
    else if(ratingInput != "" && ratingValue == "none"){
        alert("Rating condition has not been selected yet")
        goCheck = false
    }
    else if(priceInput == "" && priceValue == "none" && ratingInput == "" && ratingValue == "none"){
        numericQuery = ""
        goCheck = true
    }
    else if(priceInput == "" && priceValue == "none" && ratingInput != "" && ratingValue !="none"){
        numericQuery = "numericFilters=rating" + ratingValue + ratingInput + "&"
        goCheck = true
    }
    else if(priceInput != "" && priceValue != "none" && ratingInput == "" && ratingValue =="none"){
        numericQuery = "numericFilters=price" + priceValue + priceInput + "&"
        goCheck = true
    }
}

function checkLimit(){
    var limitInput = document.getElementById('limit').value

    if(limitInput != ""){
        limitQuery = "limit=" + limitInput + "&"
        
    }
    if(limitInput ==""){
        limitQuery = ""
    }
}

function checkPage(){
    var pageInput = document.getElementById('page').value

    if(pageInput != ""){
        pageQuery = "page=" + pageInput + "&"
        
    }
    if(pageInput == ""){
        pageQuery = ""
    }
}