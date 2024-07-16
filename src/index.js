import ReactDOM from "react-dom/client";
/*TODO:    Sử dụng từ khoá import để thêm thư viện
*/
/*TODO: Buớc 3: Khai báo biến fruits mang giá trị là danh sách các loại quả muốn hiển thị*/
const fruits = ["Apple", "Banana", "Orange", "Apricot", "Black rowan", "Cranberry"];
/*TODO: Sử dụng const để khai báo biến fruits với giá trị ban đầu là [‘Apple’, ‘Banana’, ‘Orange’, ‘Apricot’, ‘Black rowan’, ‘Cranberry’]*/

const root = ReactDOM.createRoot(document.getElementById("root"));
/*TODO: Khai báo biến root và khởi tạo với ReactDOM.createRoot(),
    sau đó truyền element vừa tạo vào hàm root.render() để render element ra UI*/

root.render(<div>
    <h1>List of fruits</h1>
    {/*TODO:    Sử dụng JSX để khởi tạo element mang giá trị hiển thị danh sách các loại quả
*/}
    <ul>
        {fruits.map(item => (<li>{item}</li>))}
    </ul>
</div>);