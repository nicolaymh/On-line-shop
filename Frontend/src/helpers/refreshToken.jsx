import axiosInstance from "./axiosInstance";

const refreshToken = async (setAuth, setLoading, navigate, setShowModal) => {
   try {
      const token = localStorage.getItem("token");

      const { data } = await axiosInstance.get(`/users/renew-token/${token}`);

      localStorage.setItem("token", data.token);
   } catch (error) {
      localStorage.clear();

      setAuth({});

      setLoading(false);

      navigate("/", { replace: true });

      setShowModal((prev) => {
         return { ...prev, ok: true, msg: error.response.data.msg };
      });
   }
};

export default refreshToken;
