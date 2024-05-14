import LoginForm from "@/components/login-form";
import OAuthForm from "@/components/oauth-form";
import Tarjeta from "@/components/Tarjeta";

const errors = new Map();
errors.set("OAuthSignin", "Error al construir una URL de autorización.");
errors.set(
  "OAuthCallback",
  "Error al manejar la respuesta de un proveedor de OAuth."
);
errors.set(
  "OAuthCreateAccount",
  "No se pudo crear un usuario proveedor de OAuth en la base de datos."
);
errors.set(
  "EmailCreateAccount",
  "No se pudo crear un usuario de proveedor de correo electrónico en la base de datos."
);
errors.set(
  "Callback",
  "Error en la ruta del controlador de devolución de llamada de OAuth."
);
errors.set(
  "OAuthAccountNotLinked",
  "Este email ya está registrado con otro proveedor, o ya esta vinculado a una cuenta con nuestros servicios"
);
errors.set("EmailSignin", "Comprueba tu dirección de correo electrónico.");
errors.set(
  "CredentialsSignin",
  "Fallo al iniciar sesion. Verifique que los datos que proporcionó sean correctos."
);
errors.set(
  "SessionRequired",
  "Error al iniciar sesión. Verifique que los detalles que proporcionó sean correctos."
);
errors.set("Default", "No se puede iniciar sesión.");

function Page({ searchParams }) {
  const { error } = searchParams;

  return (
    <Tarjeta>
      <h1 className="text-2xl mb-4 text-center">Iniciar sesión</h1>

      {error && <h3 className="text-red-700">{errors.get(error)}</h3>}
      <LoginForm />
      {/* Pasar el error como prop al componente OAuthForm */}
      <OAuthForm error={error} />
    </Tarjeta>
  );
}

export default Page;
