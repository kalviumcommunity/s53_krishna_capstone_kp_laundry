"use client";
import { ReactNode } from "react";
import { Dialog, DialogClose, DialogContent } from "./ui/dialog";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import Image from "next/image";
import { api } from '@/convex/_generated/api'
import { useMutation } from 'convex/react'
import React, { useState } from 'react'
import { Input } from "./ui/input";
import { useUser } from "@clerk/nextjs";
import { toast } from "sonner";


interface MeetingModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  className?: string;
  children?: ReactNode;
  handleClick?: () => void;
  buttonText?: string;
  instantMeeting?: boolean;
  image?: string;
  buttonClassName?: string;
  buttonIcon?: string;
}

const ClotheModal = ({

  isOpen,
  onClose,
  title,
  className,
  children,
  handleClick,
  buttonText,
  instantMeeting,
  image,
  buttonClassName,
  buttonIcon,
}: MeetingModalProps) => {
  const {user}=useUser();

  const [form, setForm] = useState({
    shirt: '',
    tshirt: '',
    trousers: '',
    pant: '',
    pyjama: '',
    bedsheets: '',
    createdBy:user?.primaryEmailAddress?.emailAddress||'',
    
  });
  

  const createForm = useMutation(api.clothes.createClothesForm)

  // const router = useRouter()

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
      onClose()
      // if(resp){
      //   router.push('/dashboard')
      
        toast.success("order received successfully !!!")
      // }
    })
  };
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="flex w-full max-w-[520px] flex-col gap-6 border-none bg-blue-1 px-6 py-9 text-white">
        <div className="flex flex-col gap-6">
          {image && (
            <div className="flex justify-center">
              <Image src={image} alt="checked" width={72} height={72} />
            </div>
          )}
          <h1 className={cn("text-3xl font-bold leading-[42px]", className)}>
            {title}
          </h1>
          {/* <ClothesForm /> Here is where we integrate the ClothesForm */}
          <div className='mt-5'>
                    <div className='mt-2'>
                      <h2 className='text-black font-medium my-1'>shirt</h2>
                      <Input placeholder="no.of clothes" onChange={(e) => setForm({ ...form, shirt: e.target.value })} />
                    </div>
                    <div className='mt-2'>
                      <h2 className='text-black font-medium my-1'>T-shirt</h2>
                      <Input placeholder="no.of clothes" onChange={(e) => setForm({ ...form, tshirt: e.target.value })} />
                    </div>
                    <div className='mt-2'>
                      <h2 className='text-black font-medium my-1'>Trousers</h2>
                      <Input placeholder="e.g. Home Decor" onChange={(e) => setForm({ ...form, trousers: e.target.value })} />
                    </div>
                    <div className='mt-2'>
                      <h2 className='text-black font-medium my-1'>Pant</h2>
                      <Input placeholder="no.of clothes" onChange={(e) => setForm({ ...form, pant: e.target.value })} />
                    </div>
                    <div className='mt-2'>
                      <h2 className='text-black font-medium my-1'>Pyjama</h2>
                      <Input placeholder="no.of clothes" onChange={(e) => setForm({ ...form, pyjama: e.target.value })} />
                    </div>
                    <div className='mt-2'>
                      <h2 className='text-black font-medium my-1'>Bedsheets</h2>
                      <Input placeholder="no.of clothes" onChange={(e) => setForm({ ...form, bedsheets: e.target.value })} />
                    </div>
                  </div>
                  <DialogClose asChild>
          <Button
            className={
              "bg-blue-1 focus-visible:ring-0 focus-visible:ring-offset-0"
            }
            onClick={handleSubmit}
            // onClick={onClose}
          >
            {buttonIcon && (
              <Image
                src={buttonIcon}
                alt="button icon"
                width={13}
                height={13}
              />
            )}{" "}
             
            {buttonText || "Schedule Meeting"}
          </Button>
          </DialogClose>
        </div>
        
      </DialogContent>
    </Dialog>
  );
};

export default ClotheModal;
