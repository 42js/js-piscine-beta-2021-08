function selectGrade() {
    let checkbox = document.getElementById('membership');
    let select = document.getElementById('grade');
    let row;

    if (checkbox.checked == true)
    {
        row = `멤버십 등급: <select onchange="createBill(this)">
                            <option value="0">--선택--</option>
                            <option value="1">Lv1</option>
                            <option value="2"">Lv2</option>
                            <option value="3"">Lv3</option>
                         </select>`
        select.innerHTML = row;
    }
    else
    {
        row = ``;
        select.innerHTML = row;
    }
}

function createBill(e) {
    let today = new Date();
    let checkbox = document.getElementById('membership');
    let row;
    let percent;

    if (checkbox.checked == false)
        return ;
    const time = document.body.children[3].children[0];
    const list = document.body.children[3].children[1];
    const value = e.value;
    let name = document.getElementById('name').value;
    let cost = document.getElementById('cost').value * 1;
    if (value === "1")
        percent = 0.05;
    else if (value === "2")
        percent = 0.1;
    else if (value === "3")
        percent = 0.15;
    let discount = cost * 1 * (1 - percent);
    row = `<li>상풍명: ${name}</li>
           <li>원가: ${cost.toLocaleString()}</li>
           <li>할인가: ${discount.toLocaleString()}</li>`;
    time.innerHTML = today.toLocaleTimeString();
    list.innerHTML = row;
}