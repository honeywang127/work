function $(id) {
    return document.getElementById(id);
}

let wq_content = $("wq-content");
let wq_where = $("wq-where");
let wq_idea = $("wq-idea");
let wq_btn = $("wq-save-question");
let tbody = $("tbody");

ajax({
    url: "php/getData.php",
    type: "get",
    success: function (data) {
        data = JSON.parse(data);
        let str = "";
        for (let i = 0; i < data.length; i++) {
            str += `
            <tr class="text-center middle">
            <td>${data[i].id}</td>
            <td>${data[i].wq_content}</td>
            <td>${data[i].wq_where}</td>
            <td>
                <a 
                    href="#" 
                    data-toggle="popover"
                    data-content="**过长内容详情(bootstrap会处理点击显示)**" 
                >${data[i].wq_idea}
                </a>
            </td>
            <td>
                <button class="btn delBtn" data-id="${data[i].id}">删除</button>
            </td>
            <td>
                <button class="btn">
                    <span class="glyphicon glyphicon-cog" aria-hidden="true"></span>
                </button>
            </td>
        </tr>
            `;
        }

        tbody.innerHTML = str;

        let aBtns = document.querySelectorAll(".delBtn");
        for (let i = 0; i < aBtns.length; i++) {
            aBtns[i].onclick = function () {
                //删数据
                let id = aBtns[i].getAttribute("data-id");
                ajax({
                    url: "php/deleteData.php",
                    type: "get",
                    data: {
                        id
                    },
                    success: function (data) {
                        if (data == 1) {
                            alert("删除成功");
                            tbody.removeChild(aBtns[i].parentNode.parentNode);
                        } else {
                            alert("删除失败，请重试");
                        }
                    }
                })


            }
        }

    }
});

//添加数据
wq_btn.onclick = function () {
    ajax({
        url: "php/addData.php",
        type: "post",
        data: {
            wq_content: wq_content.value,
            wq_where: wq_where.value,
            wq_idea: wq_idea.value
        },
        success: function (data) {
            if (data == 1) {
                alert("添加成功");
                location.reload();
            } else {
                alert("添加失败");
            }
        }
    })
}