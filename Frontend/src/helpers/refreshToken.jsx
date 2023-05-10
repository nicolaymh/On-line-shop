import axiosInstance from "./axiosInstance";

const refreshToken = async (setAuth, setLoading, navigate, setShowModal) => {
   try {
      const token = localStorage.getItem("token");

      const { data } = await axiosInstance.get(`/users/renew-token/${token}`);

      localStorage.setItem("token", data.token);
   } catch (error) {
      localStorage.clear();
      setAuth({});
      navigate("/", { replace: true });
      setLoading(false);
      setShowModal(true);
   }
};

export default refreshToken;
