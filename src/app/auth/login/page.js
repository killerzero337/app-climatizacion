import LoginForm from "@/components/login-form";
import OAuthForm from "@/components/oauth-form";

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
    <div className="flex flex-col items-center justify-center h-[80vh]">
      <h1 className="text-2xl mb-4">Iniciar sesión</h1>
      <div className="container flex flex-col items-center gap-4 border-2 border-sky-700 p-8 rounded-md bg-gray-200/80">
        {error && <h3 className="text-red-700">{errors.get(error)}</h3>}
        <LoginForm />
        {/* Pasar el error como prop al componente OAuthForm */}
        <OAuthForm error={error} />
      </div>
    </div>
  );
}

export default Page;
