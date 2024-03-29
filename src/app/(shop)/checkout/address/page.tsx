import { getCountries, getUserAddres } from '@/actions';
import { AdressForm } from './ui/AdressForm';
import { auth } from '@/auth.config';


export default async function AdressPage() {

  const countries = await getCountries()
  const session = await auth()
  
  if (!session?.user) {
    return (
      <h3 className='text-5xl'>500 no hay sesion activa </h3>
    )
  }
  const userAdress = await getUserAddres(session.user.id)?? undefined

  return (
    <div className="flex flex-col sm:justify-center sm:items-center mb-72 px-10 sm:px-0">
      <AdressForm countries={countries} userStoredAddress={userAdress} />
    </div>
  );
}