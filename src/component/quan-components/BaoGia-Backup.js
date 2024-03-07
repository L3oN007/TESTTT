// import React, { useState, useEffect } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTimes } from "@fortawesome/free-solid-svg-icons";
// import logo from "../../assets/images/logo.jpg";
// import { Link } from "react-router-dom";
// function ProductRow({
//   productID,
//   productname,
//   describe,
//   size,
//   unit,
//   mass,
//   unitPrice,
//   quantity,
//   onQuantityChange,
//   onDelete,
// }) {
//   return (
//     <tr className="product-row" data-productID={productID}>
//       <td>{productname}</td>
//       <td>{describe}</td>
//       <td>
//         Long: {size.long}, Wide: {size.wide}, Height: {size.height}
//       </td>
//       <td>{unit}</td>
//       <td>{mass}</td>
//       <td>{unitPrice.toLocaleString()}₫</td>
//       {/* <td>${unitPrice.toFixed(2)}</td> */}
//       <td>
//         <input
//           type="number"
//           className="quantity productSelect"
//           value={quantity}
//           min="1"
//           onChange={onQuantityChange}
//         />
//       </td>
//       <td>
//         <button className="AddButton m-0 ms-1" onClick={onDelete}>
//           <FontAwesomeIcon icon={faTimes} />
//         </button>
//       </td>
//     </tr>
//   );
// }

// export default function BaoGia() {
//   const [productList, setProductList] = useState([]);
//   const [totalPrice, setTotalPrice] = useState(0);
//   const [selectedProduct, setSelectedProduct] = useState("A");
//   const [productOptions, setProductOptions] = useState([]);
//   useEffect(() => {
//     updateTotalPrice();
//     const options = Object.keys(productData).map((key) => (
//       <option key={key} value={key}>
//         {productData[key].name}
//       </option>
//     ));
//     setProductOptions(options);
//   }, [productList, selectedProduct]);
//   function updateTotalPrice() {
//     let total = 0;
//     productList.forEach(({ product, quantity }) => {
//       const unitPrice = productData[product].unit_price;
//       total += quantity * unitPrice;
//       console.log(productData.F.productname);
//     });
//     setTotalPrice(total);
//   }
//   function handleProductChange(event) {
//     setSelectedProduct(event.target.value);
//   }
//   function addProductRow() {
//     const selectedProduct = document.getElementById("selectProduct").value;
//     const quantity = parseInt(document.getElementById("quantity").value) || 0;

//     const existingIndex = productList.findIndex(
//       (item) => item.product === selectedProduct
//     );
//     if (existingIndex !== -1) {
//       const updatedList = [...productList];
//       updatedList[existingIndex].quantity += quantity;
//       setProductList(updatedList);
//     } else {
//       const newRow = {
//         product: selectedProduct,
//         quantity: quantity,
//       };
//       setProductList([...productList, newRow]);
//     }
//     updateTotalPrice();
//   }

//   function removeProductRow(product) {
//     const updatedList = productList.filter((item) => item.product !== product);
//     setProductList(updatedList);
//     updateTotalPrice();
//   }

//   return (
//     <div className="container-fluid">
//       <div className="LogoAndTitle">
//         {/* <div className='Logo'>
//           <Link to='/' className='navbar-brand'>
//             <img src={logo} />
//           </Link>
//         </div> */}
//         <div className="dropdown-divider border-black mb-5"></div>
//         <div className="Title">Bảng báo giá</div>
//       </div>
//       <section id="infoAndCustomer">
//         <div className="d-flex justify-content-between">
//           <div className="leftText providerInfo">
//             <div className="providerInfoContent">
//               <h4>
//                 <strong>Email</strong>: NotRealEmail@gmail.com
//               </h4>
//             </div>
//             <div className="providerInfoContent">
//               <h4>
//                 <strong>Số điện thoại</strong>: 0243 5536750
//               </h4>
//             </div>
//             <div className="providerInfoContent">
//               <h4>
//                 <strong>Showroom</strong>: Av. A Phillips, 1, Zona Industrial
//                 San Vicente
//               </h4>
//             </div>
//             <div className="providerInfoContent">
//               <h4>
//                 <strong>Xưởng</strong>: Av. A Phillips, 1, Zona Industrial San
//                 Vicente
//               </h4>
//             </div>
//           </div>
//           <div className="rightText providerInfo d-flex flex-column CustomerInput ">
//             <div className="d-flex align-items-center">
//               <strong>Khách Hàng:</strong>
//               {/* <input type='text' placeholder='Nhập tên khách hàng' value/> */}
//               <input type="text" placeholder="Nhập tên khách hàng" />
//             </div>
//             <div className="d-flex align-items-center">
//               <strong>Số điện thoại:</strong>
//               <input type="text" placeholder="Nhập số điện thoại" />
//             </div>
//             <div className="d-flex align-items-center">
//               <strong>Địa chỉ công trình:</strong>
//               <input type="text" placeholder="Nhập địa chỉ công trình" />
//             </div>
//             <div className="d-flex align-items-center">
//               <strong>Ngày soạn báo giá:</strong>
//               <input type="text" placeholder="Nhập ngày soạn báo giá" />
//             </div>
//           </div>
//         </div>
//       </section>
//       <section id="quotation">
//         <form className="d-flex">
//           <div className="d-flex w-100 justify-content-between">
//             <label
//               htmlFor="selectProduct"
//               className="SelectProduct w-100 justify-content-between me-1 align-items-center"
//             >
//               Chọn sản phẩm:
//               <select
//                 id="selectProduct"
//                 value={selectedProduct}
//                 onChange={handleProductChange}
//                 class="form-select productSelect fs-6"
//               >
//                 {productOptions}
//               </select>
//             </label>
//             <label
//               htmlFor="quantity"
//               className="SelectProduct w-100 align-items-center"
//             >
//               Nhập số lượng:
//               <input
//                 type="number"
//                 id="quantity"
//                 min="1"
//                 defaultValue="1"
//                 className="w-50 productSelect m-0 ms-1"
//               />
//               <button
//                 type="button"
//                 className="w-25 fs-6 fw-normal AddProduct m-0 ms-1"
//                 onClick={addProductRow}
//               >
//                 Thêm sản phẩm
//               </button>
//             </label>
//           </div>
//         </form>

//         <table>
//           <thead>
//             <tr>
//               <th>Sản Phẩm</th>
//               <th>Mô tả</th>
//               <th>Kích thước</th>
//               <th>Đơn vị</th>
//               <th>Khối lượng</th>
//               <th>Đơn giá</th>
//               <th>Số lượng</th>
//               <th></th>
//             </tr>
//           </thead>
//           <tbody id="product-table-body">
//             {productList.map((item, index) => (
//               <ProductRow
//                 key={index}
//                 productID={item.product}
//                 productname={productData[item.product].name}
//                 describe={productData[item.product].describe}
//                 size={productData[item.product].size}
//                 unit={productData[item.product].unit}
//                 mass={productData[item.product].mass}
//                 unitPrice={productData[item.product].unit_price}
//                 quantity={item.quantity}
//                 onQuantityChange={(e) => {
//                   const updatedList = [...productList];
//                   updatedList[index].quantity = parseInt(e.target.value);
//                   setProductList(updatedList);
//                   updateTotalPrice();
//                 }}
//                 onDelete={() => removeProductRow(item.product)}
//               />
//             ))}
//           </tbody>
//         </table>

//         <p className="TotalPrice">Tổng giá tiền: {totalPrice.toLocaleString()}₫</p>
//         <button type="button" class="Finish_button">
//           Submit
//         </button>
//         <div className="dropdown-divider border-black mb-5"></div>
//       </section>
//     </div>
//   );
// }
// const productData = {
//   A: {
//     name: "Bàn Ăn Gỗ Sồi Vintage",
//     describe:
//       " Bàn ăn gỗ sồi vintage mang lại sự sang trọng và đẳng cấp cho không gian ăn của bạn. Với thiết kế cổ điển và chất liệu gỗ chắc chắn, nó là một điểm nhấn tuyệt vời cho bất kỳ nhà.",
//     size: { long: '150cm', wide: '80cm', height: '75cm' },
//     unit: "1",
//     mass: "30kg",
//     unit_price: 5_000_000
//   },
//   B: {
//     name: "Bộ Sofa 3 chỗ Da Phòng Khách Modern",
//     describe: "Bộ sofa da phòng khách mang đến sự thoải mái và phong cách hiện đại. Với da cao cấp và khung thép chắc chắn, nó là lựa chọn lý tưởng cho không gian tiếp khách hoặc phòng khách gia đình.",
//     size: { long: '220cm', wide: '90cm', height: '80cm' },
//     unit: "2",
//     mass: "40kg",
//     unit_price: 15_000_000,
//   },
//   C: {
//     name: "Đèn Chùm Trần Phòng Ngủ Đương Đại",
//     describe: "Đèn chùm trần phòng ngủ mang lại không gian ấm áp và lãng mạn. Với thiết kế hiện đại và ánh sáng dịu dàng, nó tạo điểm nhấn cho bất kỳ phòng ngủ nào.",
//     size: { long: '50cm', wide: '0', height: '30cm' },
//     unit: "1",
//     mass: "3kg",
//     unit_price: 2_500_000,
//   },
//   D: {
//     name: "Bức Tranh Trang Trí Phòng Khách Abstract",
//     describe: "Bức tranh trang trí phòng khách với hình ảnh trừu tượng mang đến sự nghệ thuật và phong cách cho không gian sống của bạn. Với các màu sắc tươi sáng và chi tiết độc đáo, nó là một điểm nhấn hoàn hảo cho bất kỳ phòng khách nào.",
//     size: { long: '0 ', wide: '80cm', height: '60cm' },
//     unit: "1",
//     mass: "2kg",
//     unit_price: 1_200_000,
//   },
//   E: {
//     name: "Tủ Kệ Gỗ Sồi Đa Năng",
//     describe: "Tủ kệ gỗ sồi đa năng giúp tối ưu hóa không gian lưu trữ và trang trí trong phòng khách hoặc phòng ngủ. Với các ngăn kéo và kệ đa dạng, nó là lựa chọn hoàn hảo cho những ai đòi hỏi sự tiện ích và đẹp mắt.",
//     size: { long: ' 120cm', wide: '40cm ', height: '150cm' },
//     unit: "1",
//     mass: "25kg",
//     unit_price: 4_800_000,
//   },
//   F: {
//     name: "Bộ Trang Trí Gối Sofa Họa Tiết Hình Học",
//     describe: "Bộ gối sofa họa tiết hình học mang đến sự tươi mới và phong cách cho không gian nghỉ ngơi của bạn. Với các màu sắc sắc nét và chất liệu vải bền, chúng tạo điểm nhấn cho bất kỳ sofa nào.",
//     size: { long: 0, wide: ' 45cm ', height: '45cm' },
//     unit: "3",
//     mass: "0.5kg (mỗi chiếc)",
//     unit_price: 900_000,
//   },
//   G: {
//     name: "Bàn Ăn Gỗ Sồi Mỹ Rustic Charm",
//     describe: "Bàn ăn được làm từ gỗ sồi Mỹ chất lượng cao, mang phong cách đồng quê mộc mạc. Thiết kế đơn giản nhưng đầy tính nghệ thuật, làm tôn lên vẻ đẹp tự nhiên trong không gian phòng ăn.",
//     size: { long: '160cm', wide: '80cm', height: '75cm' },
//     unit: "1",
//     mass: "30kg",
//     unit_price: 10_500_000,
//   },
//   H: {
//     name: "Đèn Bàn Matin",
//     describe: "Chiếc đèn bàn Matin của Inga Sempé nở hoa với các mẫu hoa. Cái bóng sứ tinh tế lan tỏa ánh sáng ấm áp, tạo ra một bầu không khí ấm cúng. Rất phù hợp để đặt trên bàn đầu giường hoặc góc đọc sách.",
//     size: { radius: "50cm" },
//     unit: "1",
//     mass: " 3kg",
//     unit_price: 3_200_000,
//   },
//   I: {
//     name: "Thảm Đỏ Alliage",
//     describe: "Thảm đỏ mềm mại với màu đỏ tươi sáng, làm nổi bật không gian sảnh hoặc phòng khách. Chất liệu cao cấp và độ dày vừa phải tạo cảm giác êm dịu khi đi trên thảm.",
//     size: { long: 0, wide: '200cm', height: '150cm' },
//     unit: "1",
//     mass: "5kg",
//     unit_price: 2_500_000,
//   },
//   J: {
//     name: "Kệ Đựng TV ",
//     describe: "Kệ đựng TV đa năng với màu sắc hiện đại và thiết kế đơn giản nhưng tiện ích. Phù hợp với các không gian phòng khách nhỏ gọn và hiện đại.",
//     size: { long: '120cm', wide: '40cm', height: '50cm' },
//     unit: "1",
//     mass: "15kg",
//     unit_price: 4_800_000,
//   },
// };
// console.log(productData);

import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/images/logo.jpg";
import { Link } from "react-router-dom";
function ProductRow({
  productID,
  productname,
  describe,
  size,
  unit,
  mass,
  unitPrice,
  quantity,
  onQuantityChange,
  onDelete,
}) {
  return (
    <tr className="product-row" data-productID={productID}>
      <td>{productname}</td>
      <td>{describe}</td>
      <td>
        Long: {size.long}, Wide: {size.wide}, Height: {size.height}
      </td>
      <td>{unit}</td>
      <td>{mass}</td>
      <td>{unitPrice.toLocaleString()}₫</td>
      <td>
        <input
          type="number"
          className="quantity productSelect"
          value={quantity}
          min="1"
          onChange={onQuantityChange}
        />
      </td>
      <td>
        <button className="AddButton m-0 ms-1" onClick={onDelete}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </td>
    </tr>
  );
}

export default function BaoGia() {
  const [productList, setProductList] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState("A");
  const [productOptions, setProductOptions] = useState([]);
  useEffect(() => {
    updateTotalPrice();
    const options = Object.keys(productData).map((key) => (
      <option key={key} value={key}>
        {productData[key].name}
      </option>
    ));
    setProductOptions(options);
  }, [productList, selectedProduct]);
  function updateTotalPrice() {
    let total = 0;
    productList.forEach(({ product, quantity }) => {
      const unitPrice = productData[product].unit_price;
      total += quantity * unitPrice;
      console.log(productData.F.productname);
    });
    setTotalPrice(total);
    localStorage.setItem("productList", JSON.stringify(productList));
  }
  function handleProductChange(event) {
    setSelectedProduct(event.target.value);
  }
  function addProductRow() {
    const selectedProduct = document.getElementById("selectProduct").value;
    const quantity = parseInt(document.getElementById("quantity").value) || 0;

    const existingIndex = productList.findIndex(
      (item) => item.product === selectedProduct
    );
    if (existingIndex !== -1) {
      const updatedList = [...productList];
      updatedList[existingIndex].quantity += quantity;
      setProductList(updatedList);
    } else {
      const newRow = {
        product: selectedProduct,
        quantity: quantity,
      };
      setProductList([...productList, newRow]);
    }
    updateTotalPrice();
  }

  function removeProductRow(product) {
    const updatedList = productList.filter((item) => item.product !== product);
    setProductList(updatedList);
    updateTotalPrice();
    localStorage.setItem("productList", JSON.stringify(updatedList));
  }

  return (
    <div className="container-fluid">
      <div className="LogoAndTitle">
        {/* <div className='Logo'>
          <Link to='/' className='navbar-brand'>
            <img src={logo} />
          </Link>
        </div> */}
        <div className="dropdown-divider border-black mb-5"></div>
        <div className="Title">Bảng báo giá</div>
      </div>
      <section id="infoAndCustomer">
        <div className="d-flex justify-content-between">
          <div className="leftText providerInfo">
            <div className="providerInfoContent">
              <h4>
                <strong>Email</strong>: NotRealEmail@gmail.com
              </h4>
            </div>
            <div className="providerInfoContent">
              <h4>
                <strong>Số điện thoại</strong>: 0243 5536750
              </h4>
            </div>
            <div className="providerInfoContent">
              <h4>
                <strong>Showroom</strong>: Av. A Phillips, 1, Zona Industrial
                San Vicente
              </h4>
            </div>
            <div className="providerInfoContent">
              <h4>
                <strong>Xưởng</strong>: Av. A Phillips, 1, Zona Industrial San
                Vicente
              </h4>
            </div>
          </div>
          <div className="rightText providerInfo d-flex flex-column CustomerInput ">
            <div className="d-flex align-items-center">
              <strong>Khách Hàng:</strong>
              {/* <input type='text' placeholder='Nhập tên khách hàng' value/> */}
              <input type="text" placeholder="Nhập tên khách hàng" />
            </div>
            <div className="d-flex align-items-center">
              <strong>Số điện thoại:</strong>
              <input type="text" placeholder="Nhập số điện thoại" />
            </div>
            <div className="d-flex align-items-center">
              <strong>Địa chỉ công trình:</strong>
              <input type="text" placeholder="Nhập địa chỉ công trình" />
            </div>
            <div className="d-flex align-items-center">
              <strong>Ngày soạn báo giá:</strong>
              <input type="text" placeholder="Nhập ngày soạn báo giá" />
            </div>
          </div>
        </div>
      </section>
      <section id="quotation">
        <form className="d-flex">
          <div className="d-flex w-100 justify-content-between">
            <label
              htmlFor="selectProduct"
              className="SelectProduct w-100 justify-content-between me-1 align-items-center"
            >
              Chọn sản phẩm:
              <select
                id="selectProduct"
                value={selectedProduct}
                onChange={handleProductChange}
                class="form-select productSelect fs-6"
              >
                {productOptions}
              </select>
            </label>
            <label
              htmlFor="quantity"
              className="SelectProduct w-100 align-items-center"
            >
              Nhập số lượng:
              <input
                type="number"
                id="quantity"
                min="1"
                defaultValue="1"
                className="w-50 productSelect m-0 ms-1"
              />
              <button
                type="button"
                className="w-25 fs-6 fw-normal AddProduct m-0 ms-1"
                onClick={addProductRow}
              >
                Thêm sản phẩm
              </button>
            </label>
          </div>
        </form>

        <table>
          <thead>
            <tr>
              <th>Sản Phẩm</th>
              <th>Mô tả</th>
              <th>Kích thước</th>
              <th>Đơn vị</th>
              <th>Khối lượng</th>
              <th>Đơn giá</th>
              <th>Số lượng</th>
              <th></th>
            </tr>
          </thead>
          <tbody id="product-table-body">
            {productList.map((item, index) => (
              <ProductRow
                key={index}
                productID={item.product}
                productname={productData[item.product].name}
                describe={productData[item.product].describe}
                size={productData[item.product].size}
                unit={productData[item.product].unit}
                mass={productData[item.product].mass}
                unitPrice={productData[item.product].unit_price}
                quantity={item.quantity}
                onQuantityChange={(e) => {
                  const updatedList = [...productList];
                  updatedList[index].quantity = parseInt(e.target.value);
                  setProductList(updatedList);
                  updateTotalPrice();
                }}
                onDelete={() => removeProductRow(item.product)}
              />
            ))}
          </tbody>
        </table>

        <p className="TotalPrice">Tổng giá tiền: {totalPrice.toLocaleString()}₫ </p>
        <button type="button" class="Finish_button">
          Submit
        </button>
        <div className="dropdown-divider border-black mb-5"></div>
      </section>
    </div>
  );
}
const productData = {
  A: {
    name: "Bàn Ăn Gỗ Sồi Vintage",
    describe:
      " Bàn ăn gỗ sồi vintage mang lại sự sang trọng và đẳng cấp cho không gian ăn của bạn. Với thiết kế cổ điển và chất liệu gỗ chắc chắn, nó là một điểm nhấn tuyệt vời cho bất kỳ nhà.",
    size: { long: '150cm', wide: '80cm', height: '75cm' },
    unit: "1",
    mass: "30kg",
    unit_price: 5_000_000
  },
  B: {
    name: "Bộ Sofa 3 chỗ Da Phòng Khách Modern",
    describe: "Bộ sofa da phòng khách mang đến sự thoải mái và phong cách hiện đại. Với da cao cấp và khung thép chắc chắn, nó là lựa chọn lý tưởng cho không gian tiếp khách hoặc phòng khách gia đình.",
    size: { long: '220cm', wide: '90cm', height: '80cm' },
    unit: "2",
    mass: "40kg",
    unit_price: 15_000_000,
  },
  C: {
    name: "Đèn Chùm Trần Phòng Ngủ Đương Đại",
    describe: "Đèn chùm trần phòng ngủ mang lại không gian ấm áp và lãng mạn. Với thiết kế hiện đại và ánh sáng dịu dàng, nó tạo điểm nhấn cho bất kỳ phòng ngủ nào.",
    size: { long: '50cm', wide: '0', height: '30cm' },
    unit: "1",
    mass: "3kg",
    unit_price: 2_500_000,
  },
  D: {
    name: "Bức Tranh Trang Trí Phòng Khách Abstract",
    describe: "Bức tranh trang trí phòng khách với hình ảnh trừu tượng mang đến sự nghệ thuật và phong cách cho không gian sống của bạn. Với các màu sắc tươi sáng và chi tiết độc đáo, nó là một điểm nhấn hoàn hảo cho bất kỳ phòng khách nào.",
    size: { long: '0 ', wide: '80cm', height: '60cm' },
    unit: "1",
    mass: "2kg",
    unit_price: 1_200_000,
  },
  E: {
    name: "Tủ Kệ Gỗ Sồi Đa Năng",
    describe: "Tủ kệ gỗ sồi đa năng giúp tối ưu hóa không gian lưu trữ và trang trí trong phòng khách hoặc phòng ngủ. Với các ngăn kéo và kệ đa dạng, nó là lựa chọn hoàn hảo cho những ai đòi hỏi sự tiện ích và đẹp mắt.",
    size: { long: ' 120cm', wide: '40cm ', height: '150cm' },
    unit: "1",
    mass: "25kg",
    unit_price: 4_800_000,
  },
  F: {
    name: "Bộ Trang Trí Gối Sofa Họa Tiết Hình Học",
    describe: "Bộ gối sofa họa tiết hình học mang đến sự tươi mới và phong cách cho không gian nghỉ ngơi của bạn. Với các màu sắc sắc nét và chất liệu vải bền, chúng tạo điểm nhấn cho bất kỳ sofa nào.",
    size: { long: 0, wide: ' 45cm ', height: '45cm' },
    unit: "3",
    mass: "0.5kg (mỗi chiếc)",
    unit_price: 900_000,
  },
  G: {
    name: "Bàn Ăn Gỗ Sồi Mỹ Rustic Charm",
    describe: "Bàn ăn được làm từ gỗ sồi Mỹ chất lượng cao, mang phong cách đồng quê mộc mạc. Thiết kế đơn giản nhưng đầy tính nghệ thuật, làm tôn lên vẻ đẹp tự nhiên trong không gian phòng ăn.",
    size: { long: '160cm', wide: '80cm', height: '75cm' },
    unit: "1",
    mass: "30kg",
    unit_price: 10_500_000,
  },
  H: {
    name: "Đèn Bàn Matin",
    describe: "Chiếc đèn bàn Matin của Inga Sempé nở hoa với các mẫu hoa. Cái bóng sứ tinh tế lan tỏa ánh sáng ấm áp, tạo ra một bầu không khí ấm cúng. Rất phù hợp để đặt trên bàn đầu giường hoặc góc đọc sách.",
    size: { radius: "50cm" },
    unit: "1",
    mass: " 3kg",
    unit_price: 3_200_000,
  },
  I: {
    name: "Thảm Đỏ Alliage",
    describe: "Thảm đỏ mềm mại với màu đỏ tươi sáng, làm nổi bật không gian sảnh hoặc phòng khách. Chất liệu cao cấp và độ dày vừa phải tạo cảm giác êm dịu khi đi trên thảm.",
    size: { long: 0, wide: '200cm', height: '150cm' },
    unit: "1",
    mass: "5kg",
    unit_price: 2_500_000,
  },
  J: {
    name: "Kệ Đựng TV ",
    describe: "Kệ đựng TV đa năng với màu sắc hiện đại và thiết kế đơn giản nhưng tiện ích. Phù hợp với các không gian phòng khách nhỏ gọn và hiện đại.",
    size: { long: '120cm', wide: '40cm', height: '50cm' },
    unit: "1",
    mass: "15kg",
    unit_price: 4_800_000,
  },
};
console.log(productData);
