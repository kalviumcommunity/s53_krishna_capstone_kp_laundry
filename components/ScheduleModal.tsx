"use client";
import { ReactNode, useState } from "react";
import { Dialog, DialogClose, DialogContent } from "./ui/dialog";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import Image from "next/image";
import { api } from '@/convex/_generated/api';
import { useMutation } from 'convex/react';
import { useUser } from "@clerk/nextjs";
import { toast } from "sonner";
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Textarea } from "./ui/textarea";

interface ScheduleModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  className?: string;
  children?: ReactNode;
  buttonText?: string;
  image?: string;
  buttonClassName?: string;
  buttonIcon?: string;
  email: string; 
}

const ScheduleModal = ({
  isOpen,
  onClose,
  title,
  className,
  buttonText,
  image,
  buttonClassName,
  buttonIcon,
  email,
}: ScheduleModalProps) => {
  const { user } = useUser();
  
  const [values, setValues] = useState({
    description: '',
    dateTime: new Date(),
    createdBy: email|| '',
    status: 'scheduled',
  });

  const createForm = useMutation(api.schedule.createSchedulesForm);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const formattedValues = {
      ...values,
      dateTime: values.dateTime.toISOString(), // Format dateTime as a string
    };
    createForm(formattedValues).then(resp => {
      console.log(resp);
      onClose();
      toast.success(" scheduled successfully!");
    }).catch(err => {
      console.error(err);
      toast.error("Failed to schedule ");
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="flex w-full max-w-[520px] flex-col gap-6 border-none bg-dark-1 bg-blue-1 px-6 py-9 text-white">
        <div className="flex flex-col gap-6">
          {image && (
            <div className="flex justify-center">
              <Image src={image} alt="checked" width={72} height={72} />
            </div>
          )}
          <h1 className={cn("text-3xl font-bold leading-[42px]", className)}>
            {title}
          </h1>
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="flex flex-col gap-2.5">
              <label className="text-base font-normal leading-[22.4px] text-sky-2">
                Add a description
              </label>
              <Textarea
                className="border-none bg-dark-3 focus-visible:ring-0 focus-visible:ring-offset-0"
                value={values.description}
                onChange={(e) =>
                  setValues({ ...values, description: e.target.value })
                }
              />
            </div>
            <div className="flex w-full flex-col gap-2.5">
              <label className="text-base font-normal leading-[22.4px] text-sky-2">
                Select Date and Time
              </label>
              <ReactDatePicker
                selected={values.dateTime}
                onChange={(date) => setValues({ ...values, dateTime: date! })}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                timeCaption="time"
                dateFormat="MMMM d, yyyy h:mm aa"
                className="w-full rounded bg-dark-3 p-2 focus:outline-none"
              />
            </div>
            <DialogClose asChild>
              <Button
                type="submit"
                className={
                  "bg-blue-1 focus-visible:ring-0 focus-visible:ring-offset-0"
                }
              >
                {buttonIcon && (
                  <Image
                    src={buttonIcon}
                    alt="button icon"
                    width={13}
                    height={13}
                  />
                )}{" "}
                 
                {buttonText || "Schedule Pickup"}
              </Button>
            </DialogClose>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ScheduleModal;
