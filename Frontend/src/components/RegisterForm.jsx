import { useForm } from "../Hooks/useForm";

const LoginForm = () => {
  const { formState, onInputChange } = useForm({
    nombre: "",
    password: "",
    email: "",
    address: "",
    phone: "",
  });

  const { nombre, password, email, address, phone } = formState;

  return (
    <form>
      <div>
        <label htmlFor="nombre">Nombre: </label>
        <input
          id="nombre"
          name="nombre"
          type="text"
          placeholder="Full Name"
          autoComplete="off"
          value={nombre}
          onChange={onInputChange}
        />
      </div>

      <div>
        <label htmlFor="password">Password: </label>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Your Pass"
          autoComplete="off"
          value={password}
          onChange={onInputChange}
        />
      </div>

      <div>
        <label htmlFor="email">E-mail: </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Your Email"
          autoComplete="off"
          value={email}
          onChange={onInputChange}
        />
      </div>

      <div>
        <label htmlFor="address">Address: </label>
        <input
          id="address"
          name="address"
          type="text"
          placeholder="Your Address"
          autoComplete="off"
          value={address}
          onChange={onInputChange}
        />
      </div>

      <div>
        <label htmlFor="phone">Phone: </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          placeholder="Your Tel"
          autoComplete="off"
          value={phone}
          onChange={onInputChange}
        />
      </div>
    </form>
  );
};

export default LoginForm;
