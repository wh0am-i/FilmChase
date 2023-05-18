import Image from "next/image";
import Link from "next/link";
import Input from "../components/input";
import PriButton from "../components/PrimaryButton";
// import { useAuth } from "../context/AuthUserContext";

export default function Cadastro() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [name, setName] = useState("");

//   const router = useRouter();
//   const [error, setError] = useState(null);

//   const { createUserWithEmailAndPassword } = useAuth();

//   const onSubmit = (event) => {
//     setError(null);

//     if (passwordOne === passwordTwo)
//       createUserWithEmailAndPassword(email, passwordOne)
//         .then((authUser) => {
//           console.log("Success. The user is created in Firebase");
//           router.push("/logged_in");
//         })
//         .catch((error) => {
//           setError(error.message);
//         });
//     else setError("Password do not match");
//     event.preventDefault();
//   };

  return (
    <main className="flex min-h-screen flex-col bg-movie">
      <div className="mt-10 ml-10 xs:ml-20">
        <div className="font-mont">
          <span className="text-white font-light">Film</span>
          <span className="text-[#AC1A19] font-bold">Chase</span>
        </div>

        <div className="mt-10">
          <div className=" font-mont font-bold">
            <span className="text-white sm:text-4xl text-2xl">
              Crie uma conta nova
            </span>
            <span className="text-[#AC1A19] text-7xl">.</span>
          </div>

          <div className="font-mont mt-2">
            <span className="text-[#BABABA] sm:text-sm text-xs font-medium">
              Já tem uma conta?
            </span>
            <span className="text-[#AC1A19] sm:text-sm text-xs font-bold">
              <Link href="/login"> Entre</Link>
            </span>
            <div className=" mt-10">
              <Input placeholder="Nome" />
              <Input
                // type="email"
                // value={email}
                // onChange={(event) => setEmail(event.target.value)}
                // name="email"
                // id="signUpEmail"
                placeholder="Email"
              />
              <Input placeholder="Senha" />
            </div>
            <PriButton>Cadastrar</PriButton>
          </div>
        </div>
      </div>
    </main>
  );
}
