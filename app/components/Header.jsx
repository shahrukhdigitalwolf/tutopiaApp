"use client"
import { useState } from 'react'
import {
  Dialog,
  DialogPanel,
 /*  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton, */
  PopoverGroup,
 /*  PopoverPanel, */
} from '@headlessui/react'
import {
  /* ArrowPathIcon, */
  Bars3Icon,
 /*  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon, */
  XMarkIcon,
} from '@heroicons/react/24/outline'
/* import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid' */
import Image from 'next/image'
import Link from 'next/link'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import { Badge, IconButton, Tooltip } from '@mui/material'
import ProfileDropdown from './ProfileDropdown'
import NotificationDropdown from './NotificationDropdown'
import SearchBar from './SearchBar'

/* const products = [
  { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
  { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
  { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
  { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
  { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
]
const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
] */

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <>
      <div className="relative isolate flex items-center gap-x-6 overflow-hidden bg-[#F7F7F7] px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <p className="text-sm/6 text-gray-900">
            Flat ₹300/- off on purchase of 999 or above. Use code FLAT30. T&C applied.
          </p>
        </div>
        <div className="flex flex-1 justify-end">
          <button type="button" className="-m-3 p-3 focus-visible:outline-offset-[-4px]">
            <span className="sr-only">Dismiss</span>
            <XMarkIcon aria-hidden="true" className="h-5 w-5 text-gray-900" />
          </button>
        </div>
      </div>
      <header className="bg-[#FFCC00] sticky top-0 z-[999]">
        <nav aria-label="Global" className="mx-auto flex max-w-[1850px] items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image
                alt=""
                src="/assets/img/tutopia-logo.jpg"
                className="h-8 w-auto"
                width={152}
                height={45}
              />
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <PopoverGroup className="hidden lg:flex lg:gap-x-6">
            {/* <Popover className="relative">
              <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900">
                Product
                <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none text-gray-400" />
              </PopoverButton>

              <PopoverPanel
                transition
                className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <div className="p-4">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon aria-hidden="true" className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" />
                      </div>
                      <div className="flex-auto">
                        <Link href={item.href} className="block font-semibold text-gray-900">
                          {item.name}
                          <span className="absolute inset-0" />
                        </Link>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                  {callsToAction.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-gray-900 hover:bg-gray-100"
                    >
                      <item.icon aria-hidden="true" className="h-5 w-5 flex-none text-gray-400" />
                      {item.name}
                    </Link>
                  ))}
                </div>
              </PopoverPanel>
            </Popover> */}

            <Link href="/" className="text-sm/6 font-semibold text-gray-900">
              Home
            </Link>
            <Link href="/" className="text-sm/6 font-semibold text-gray-900">
              Books & Notes
            </Link>
            <Link href="/" className="text-sm/6 font-semibold text-gray-900">
              Video Tutorials
            </Link>
            <Link href="/" className="text-sm/6 font-semibold text-gray-900">
              Live Classes
            </Link>
            <Link href="/" className="text-sm/6 font-semibold text-gray-900">
              TV Box
            </Link>
          </PopoverGroup>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-0 lg:items-center">
            <Link href="/" className="text-sm/6 font-semibold text-gray-900">
              <SearchBar/>
            </Link>
            <div>
              <NotificationDropdown/>
            </div>
            <Link href="/add-to-cart" className="text-sm/6 font-semibold text-gray-900">
              <Tooltip title="Add to cart">
                  <IconButton
                  sx={{ color:'black' }}
                  >
                  <Badge badgeContent={1} color="primary">
                      <AddShoppingCartIcon/>
                  </Badge>
                  </IconButton>
              </Tooltip>
            </Link>
           {/*  <Link href="/" className="text-sm/6 font-semibold text-gray-900 flex items-center gap-x-1 ms-3">
             <LoginOutlinedIcon fontSize='small' /> Log in 
            </Link> */}
            <ProfileDropdown/>
          </div>
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-10" />
          <DialogPanel className="fixed inset-y-0 right-0 z-[1000] w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <Image
                  alt=""
                  src="/assets/img/tutopia-logo.jpg"
                  className="h-8 w-auto"
                  width={152}
                  height={45}
                />
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {/* <Disclosure as="div" className="-mx-3">
                    <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                      Product
                      <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none group-data-[open]:rotate-180" />
                    </DisclosureButton>
                    <DisclosurePanel className="mt-2 space-y-2">
                      {[...products, ...callsToAction].map((item) => (
                        <DisclosureButton
                          key={item.name}
                          as="a"
                          href={item.href}
                          className="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                        >
                          {item.name}
                        </DisclosureButton>
                      ))}
                    </DisclosurePanel>
                  </Disclosure> */}
                  <Link
                    href="/"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    Home
                  </Link>
                  <Link
                    href="/"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    Books & Notes
                  </Link>
                  <Link
                    href="/"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    Video Tutorials
                  </Link>
                  <Link
                    href="/"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    Live Classes
                  </Link>
                  <Link
                    href="/"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    TV Box
                  </Link>
                </div>
                <div className="py-6">
                  <Link
                    href="/"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </Link>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
    
    </>
  )
}

export default Header