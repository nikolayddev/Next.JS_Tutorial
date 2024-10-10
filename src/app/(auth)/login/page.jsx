import { handleGitHubLogin } from "@/lib/actions";

export default async function LoginPage() {
    return (
        <div>
            <form action={handleGitHubLogin}>
                <button>Login with GitHub</button>
            </form>
        </div>
    );
}