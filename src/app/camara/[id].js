import { useRouter } from "next/router";
const page = () => {
  const router = useRouter();
  const { id } = router.query;
  console.log(id);
  return <div>Directorio del proyecto {[id]}</div>;
};
