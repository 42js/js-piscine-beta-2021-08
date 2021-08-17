
const getTime = () => {
    const timeArea = document.querySelector('time');

    const now = new Date();

    let datetime = now.toISOString();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let year = now.getFullYear();
    let month = now.getMonth() + 1;
    let day = now.getDate();
    
    if (hours > 12) 
        hours = `오후 ${hours - 12}`;
    else
        hours = `오전 ${hours}`;
    
    timeArea.dateTime = datetime;
    timeArea.innerHTML = `${year}. ${month}. ${day}. ${hours}:${minutes}:${seconds}`;
}

const form = document.forms.product_form;

const form_item = {
    name: form.product_name,
    price: form.price,
    isMember: form.isMember,
    grade: form.grade
};

const receipt = {
    name: document.querySelector('.name'),
    price: document.querySelector('.price'),
    salePrice: document.querySelector('.sale_price')
}

const checkIsMember = (e) => {
    if (e.target.checked)
        form_item.grade.removeAttribute("disabled");
    else
    {
        form_item.grade.setAttribute("disabled", "true");
        form_item.grade.value = ''
    }
    handleOptionSelected();
}

const handleNameChange = (e) => {
    receipt.name.innerHTML = '상품명: ' + e.target.value;
}

const handleOptionSelected = () => {
    let salePrice = Number(form_item.price.value);
    if (form_item.grade.value === 'lv1')
        salePrice -= salePrice * 5 / 100;
    else if (form_item.grade.value === 'lv2')
        salePrice -= salePrice * 10 / 100;
    else if (form_item.grade.value === 'lv3')
        salePrice -= salePrice * 15 / 100;
    salePrice = salePrice.toLocaleString();
    receipt.salePrice.innerHTML = `할인가: ${salePrice}`;
}

const handlePriceChange = (e) => {
    receipt.price.innerHTML = '원가: ' + Number(e.target.value).toLocaleString();
    handleOptionSelected();
}

form_item.isMember.addEventListener('change', checkIsMember);
form_item.name.addEventListener('change', handleNameChange);
form_item.price.addEventListener('change', handlePriceChange);
form_item.grade.addEventListener('change', handleOptionSelected);




getTime();