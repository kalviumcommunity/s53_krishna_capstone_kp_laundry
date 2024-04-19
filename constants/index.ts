import { DashboardIcon } from "@radix-ui/react-icons";
import { AreaChart, ArrowBigRight, CheckCircle, Home, LayoutDashboard, LineChart, Plus, PlusCircleIcon, ShoppingBag } from "lucide-react";

export const sidebarLinks = [
    {
      imgURL: Home,
      route: '/',
      label: 'Home',
    },
  
    {
      imgURL: LayoutDashboard,
      route: '/dashboard',
      label: 'Dashboard',
    },
    {
      imgURL: ShoppingBag ,
      route: '/orders',
      label: 'orders',
    },
    {
      imgURL: AreaChart,
      route: '/status',
      label: 'Status',
    },
    {
      imgURL:CheckCircle ,
      route: '/completed',
      label: 'completed',
    },
    {
      imgURL: PlusCircleIcon,
      route: '/clothes',
      label: 'Add Clothes',
    },
  ];
  
  export const avatarImages = [
    '/images/avatar-1.jpeg',
    '/images/avatar-2.jpeg',
    '/images/avatar-3.png',
    '/images/avatar-4.png',
    '/images/avatar-5.png',
  ];