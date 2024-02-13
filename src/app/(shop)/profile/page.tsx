import { auth } from "@/auth.config";
import { CustomerProfile, Title } from "@/components";
import { AdminProfile } from "@/components";
import { redirect } from "next/navigation";

export default async function ProfilePage() {

    const session = await auth()
    const { user } = session || {}

    /* redirect('/auth/login?returnTo=/profile ') */
    if (!user) return redirect('/')

    const isAdmin = session?.user.role === "admin";

    return (

        <div className="p-5">
            <Title title="profile" />
            {
                !isAdmin ?
                    <CustomerProfile />
                    :
                    <AdminProfile />
            }

        </div>
    )
}
