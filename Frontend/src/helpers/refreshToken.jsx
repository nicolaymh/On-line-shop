import axiosInstance from "./axiosInstance";

const refreshToken = async (setAuth, setLoading, navigate) => {
   try {
      const token = localStorage.getItem("token");

      const { data } = await axiosInstance.get(`/users/renew-token/${token}`);

      localStorage.setItem("token", data.token);
   } catch (error) {
      console.log(error.response.data);

      localStorage.clear();
      setAuth({});
      navigate("/", { replace: true });
      setLoading(false);
   }
};

export default refreshToken;
