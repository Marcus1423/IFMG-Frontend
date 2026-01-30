import { useForm } from "react-hook-form"
import * as z from "zod"

function ReactHooKForm() {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => console.log(`O usuário ${data.firstName} com o email ${data.myEmail} com a senha ${data.myPwd}`);

return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("firstName")} placeholder="Nome" />
        <input {...register("myEmail")} placeholder="Email" />
        <input {...register("myPwd")} placeholder="password" />
        <button type="submit">Enviar</button>
    </form>
);
}

export default ReactHooKForm;