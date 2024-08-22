// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
export default function Contact() {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const onSubmit = async (data) => {
        const contactInfo = {
          fullname: data.fullname,
          email: data.email,
          message: data.message,
        };
        await axios
          .post("http://localhost:4001/contact/contactform", contactInfo)
          .then((res) => {
            console.log(res.data);
            if (res.data) {
              toast.success("Message send Successfully");
              navigate(from, { replace: true });
            }
            localStorage.setItem("Users", JSON.stringify(res.data.user));
          })
          .catch((err) => {
            if (err.response) {
              console.log(err);
              toast.error("Error: " + err.response.data.message);
            }
          });
      };
  return (
    <>
    <div className="flex h-screen items-center justify-center">
        <div className=" w-[600px] ">
          <div className="modal-box">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              {/* {/ if there is a button in form, it will close the modal /} */}
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link>

              <h1 className="font-bold text-lg">Contact Us</h1>
                    <div>
                        <label className="label">
                            <span className="text-base label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Enter Your Name" className='w-80 px-3 py-1 border rounded-md outline-none' 
                        {...register("fullname", { required: true })} />
                        <br />
                               {errors.name && (
                                 <span className="text-sm text-red-500">
                                   This field is required
                                 </span>
                               )}

                    </div>
                    <div>
                        <label className="label">
                            <span className="text-base label-text ">Email</span>
                        </label>
                        <input type="text" placeholder="Enter Your Email" className='w-80 px-3 py-1 border rounded-md outline-none' 
                        {...register("email", { required: true })}/>
       <br />
              {errors.name && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
                    </div>
                    <div>
                        <label className="label">
                            <span className="text-base label-text">Message</span>
                        </label>
                        <textarea rows="4" cols="50"
                        type="text" placeholder="Type Your Message"
                            className='w-80 px-3 py-1 border rounded-md outline-none'
                            
                            style={{ width: '80', height: '150px' }}   {...register("message", { required: true })}/>
                            <br />
                                   {errors.name && (
                                     <span className="text-sm text-red-500">
                                       This field is required
                                     </span>
                                   )}


 
                    </div>
                     
                   
                 
                    <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                  Submit
                </button>
                   
                     
                </form>
            </div>
        </div>


 </div>
    </>
//     <>
//      <div className="flex h-screen items-center justify-center ">
//      <div className="modal-box ">
//       <div className="relative flex flex-col justify-center h-screen ">
//         <div className="w-full p-6 m-auto rounded-md shadow-md lg:max-w-xl ">
//           <h1 className="text-3xl font-semibold text-center text-grey-700">
//             Contact Form
//           </h1>
//           <form className="space-y-6" onSubmit={handleSubmit(onSubmit)} method="dialog">
//             {/* if there is a button in form, it will close the modal */}
//             <Link
//               to="/"
//               className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
//             >
//               ✕
//             </Link>
//             <div>
//               <label className="label">
//                 <span className="text-base label-text">Name</span>
//               </label>
//               <input
//                 type="text"
//                 placeholder="Name"
//                 className="w-full px-3 py-1 border rounded-md outline-none"
//                 {...register("fullname", { required: true })}
//               />
//               <br />
//               {errors.fullname && (
//                 <span className="text-sm text-red-500">
//                   This field is required
//                 </span>
//               )}
//             </div>
//             <div>
//               <label className="label">
//                 <span className="text-base label-text">Email</span>
//               </label>
//               <input
//                 type="text"
//                 placeholder="Email Address"
//                 className="w-full px-3 py-1 border rounded-md outline-none"
//                 {...register("email", { required: true })}
//               />
//               <br />
//               {errors.email && (
//                 <span className="text-sm text-red-500">
//                   This field is required
//                 </span>
//               )}
//             </div>
//             <div>
//               <label className="label">
//                 <span className="text-base label-text">Message</span>
//               </label>
//               <textarea
//                 type="string"
//                 placeholder="Enter your message "
//                 style={{ width: "100%", height: "150px" }}
//                 className="w-full px-3 py-1 border rounded-md outline-none"
//                 {...register("message", { required: true })}
//               />
//               <br />
//               {errors.email && (
//                 <span className="text-sm text-red-500">
//                   This field is required
//                 </span>
//               )}
//             </div>

//             <div>
//               <button  className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">Submit Form</button>
//             </div>
//           </form>
//         </div>
//         </div>
//  </div>
//       </div>
    // </>
  );
}
