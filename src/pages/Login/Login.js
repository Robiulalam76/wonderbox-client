import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
} from "@material-tailwind/react";
import { useForm } from "react-hook-form";

export default function Login() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = (data) => {

        fetch(`http://localhost:5000/api/user/login`, {
            method: "POST"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }

    return (
        <Card color="transparent" shadow={false} className="w-96 mx-auto">
            <Typography variant="h4" color="blue-gray">
                Sign Up
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
                Enter your details to register.
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                <div className="mb-4 flex flex-col gap-6">
                    <Input {...register("email", { required: true })}
                        size="lg" name="email" label="Email" />
                    <Input {...register("password", { required: true })}
                        type="password" name="password" size="lg" label="Password" />
                </div>
                <Checkbox
                    label={
                        (
                            <Typography
                                variant="small"
                                color="gray"
                                className="flex items-center font-normal"
                            >
                                I agree the
                                <a
                                    href="#"
                                    className="font-medium transition-colors hover:text-blue-500"
                                >
                                    &nbsp;Terms and Conditions
                                </a>
                            </Typography>
                        )
                    }
                    containerProps={{ className: "-ml-2.5" }}
                />
                <Button className="mt-6" fullWidth>
                    Register
                </Button>
                <Typography color="gray" className="mt-4 text-center font-normal">
                    Already have an account?{" "}
                    <a
                        href="#"
                        className="font-medium text-blue-500 transition-colors hover:text-blue-700"
                    >
                        Sign In
                    </a>
                </Typography>
            </form>
        </Card>
    );
}