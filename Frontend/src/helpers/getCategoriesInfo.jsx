import axiosInstance from "../helpers/axiosInstance";

const getCategoriesInfo = async ({
   setCategoryinfoAll,
   setShowModal,
   navigate,
   setAuth,
   setLoading,
}) => {
   const token = localStorage.getItem("token") || null;

   const config = {
      headers: {
         "Content-Type": "application/json",
         Authorization: `Bearer ${token}`,
      },
   };

   try {
      const { data } = await axiosInstance("/categories/get-categories", config);
      setCategoryinfoAll(data.categories);
   } catch (error) {
      console.log(error);
      setShowModal({ ok: true, msg: error.response.data.msg || "server error" });

      navigate("/", { replace: true });

      localStorage.clear();

      setAuth({});

      setLoading(false);
   }
};

export default getCategoriesInfo;
