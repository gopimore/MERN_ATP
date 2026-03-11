import { NavLink } from "react-router";

function Header() {
  return (
    <div className="flex justify-between px-10  items-center bg-gray-300">
      {/* logo */}
      <img
        width="80px"
        className="p-2"
        src="https://img.freepik.com/premium-vector/online-shop-e-commerce-logo_1199645-37307.jpg?semt=ais_hybrid&w=740&q=80"
        alt=""
      />
      {/* ul of links */}
      <ul className="flex gap-10 text-2xl">
        <li>
          <NavLink to="" className={({ isActive }) => (isActive ? "text-blue-100 bg-blue-500 p-2" : "")}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="products" className={({ isActive }) => (isActive ? "text-blue-100 bg-blue-500 p-2" : "")}>
            ProductsList
          </NavLink>
        </li>
        <li>
          <NavLink to="contact" className={({ isActive }) => (isActive ? "text-blue-100 bg-blue-500 p-2" : "")}>
            ContactUs
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Header;







// import { useState } from "react";
// import { NavLink } from "react-router";

// function Header() {
//   const [open, setOpen] = useState(false);

//   const linkClasses = ({ isActive }) =>
//     isActive
//       ? "text-blue-100 bg-blue-500 px-3 py-1 rounded"
//       : "hover:text-blue-500";

//   return (
//     <div className="bg-gray-300 px-4 md:px-10">
//       <div className="flex justify-between items-center">
//         {/* logo */}
//         <img
//           width="80px"
//           className="p-2"
//           src="https://img.freepik.com/premium-vector/online-shop-e-commerce-logo_1199645-37307.jpg?semt=ais_hybrid&w=740&q=80"
//           alt="logo"
//         />

//         {/* hamburger button (mobile only) */}
//         <button
//           className="md:hidden text-3xl"
//           onClick={() => setOpen(!open)}
//         >
//           ☰ 
//         </button>

//         {/* nav links (desktop) */}
//         <ul className="hidden md:flex gap-10 text-xl lg:text-2xl">
//           <li>
//             <NavLink to="" className={linkClasses}>
//               Home
//             </NavLink>
//           </li>
//           <li>
//             <NavLink to="products" className={linkClasses}>
//               ProductsList
//             </NavLink>
//           </li>
//           <li>
//             <NavLink to="contact" className={linkClasses}>
//               ContactUs
//             </NavLink>
//           </li>
//         </ul>
//       </div>

//       {/* mobile menu */}
//       {open && (
//         <ul className="flex flex-col gap-4 text-lg pb-4 md:hidden">
//           <li>
//             <NavLink to="" className={linkClasses} onClick={() => setOpen(false)}>
//               Home
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="products"
//               className={linkClasses}
//               onClick={() => setOpen(false)}
//             >
//               ProductsList
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="contact"
//               className={linkClasses}
//               onClick={() => setOpen(false)}
//             >
//               ContactUs
//             </NavLink>
//           </li>
//         </ul>
//       )}
//     </div>
//   );
// }

// export default Header;