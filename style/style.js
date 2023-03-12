function test()
{
    console.log("test")
}

function test1(info)
{
    console.log(info)
}


const getLocalData = async(keys) =>{
    let name = "";
    const savedName = localStorage.getItem(keys)
    if(savedName)
    {
        name = JSON.parse(savedName)
    }
    return name
}

const saveLocalData = async(keys,val) =>{
    let name = getLocalData(keys)
    name  = val
    const nameString = JSON.stringify(name)
    localStorage.setItem(keys,nameString)
}

const SendName = async() =>{
    const input = document.getElementById('NameInput').value
    document.getElementById('NameInput').value = ''
    saveLocalData('name',input)
}
const SendEmail = async() =>{
    const input = document.getElementById('EmailInput').value
    document.getElementById('EmailInput').value = ''
    saveLocalData('email',input)
}
const SendMessage = async() =>{
    const input = document.getElementById('MessageInput').value
    document.getElementById('MessageInput').value = ''
    saveLocalData('text',input)
}


const dltName = async() =>{
    localStorage.removeItem('name')
}
const dltEmail = async() =>{
    localStorage.removeItem('email')
}
const dltMessage = async() =>{
    localStorage.removeItem('text')
}

const adds = async() =>{
    const input1 = document.getElementById('NameInput').value
    const input2 = document.getElementById('EmailInput').value
    const input3 = document.getElementById('MessageInput').value
    
    let all = {}

   all['name'] = input1
   all['email'] = input2
   all['text'] = input3
   const allString = JSON.stringify(all)
   localStorage.setItem('all',allString)
}

const clears = async() =>{
    localStorage.clear()
}