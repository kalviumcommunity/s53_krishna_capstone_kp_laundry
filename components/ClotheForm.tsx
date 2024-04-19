import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { api } from '@/convex/_generated/api'

// import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import { useMutation } from 'convex/react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
// import { toast } from 'sonner'

function ClotheForm() {
  const [form, setForm] = useState({
    shirt: '',
    tshirt: '',
    trousers: '',
    pant: '',
    pyjama: '',
    bedsheets: ''
  });

  const createForm = useMutation(api.clothes.createClothesForm)
//   const {user}:any = useKindeBrowserClient();
  const router = useRouter()

  const handleChange = (e:any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    createForm(form).then(resp => {
      console.log(resp);
      if(resp){
        router.push('/dashboard')
        // toast("Form submitted successfully!!!")
      }
    })
  };

  return (
    <div className='px-6 md:px-17 my-16'>
        <Image src='/logo-black.png' alt='logo' width={200} height={200}/>
        <div className='flex flex-col items-center mt-6'>
            <h2 className='font-bold text-[40px] py-3'>Fill in your clothes details</h2>
            <h2 className='text-gray-500 '>You can always change this later from settings.</h2>
            <div className='mt-7 w-[40%]'>
                <label className='text-gray-500'>Shirt</label>
                <Input placeholder='Shirt' className='mt-3' name="shirt" value={form.shirt} onChange={handleChange}/>
                {/* Repeat for other form fields */}
            </div>
            <Button className='bg-blue-500 mt-9 w-[30%] hover:bg-sky-700'
             onClick={handleSubmit}
            > Submit</Button>
        </div>
    </div>
  )
}

export default ClotheForm
