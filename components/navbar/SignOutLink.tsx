'use client';

import { toast } from 'sonner';
import Link from 'next/link';

function SignOutLink() {
  const handleLogout = () => {
    toast('Logout Successful');
  };
  return (
    <>
      <Link href='/' className='w-full text-left' onClick={handleLogout}>
        Logout
      </Link>
    </>
  );
}
export default SignOutLink;
