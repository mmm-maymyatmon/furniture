import { Form, Link } from 'react-router';
import type { User } from '@/types';
import { Button } from '../ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { DropdownMenuGroup } from '@radix-ui/react-dropdown-menu';
import { Icons } from '../icons';

interface UserProps {
  user: User;
}

function AuthDropdown({ user }: UserProps) {
  if (!user) {
    return (
      <Button size="sm" asChild>
        <Link to="/signIn">
          Sign In
          <span className="sr-only">Sign In</span>
        </Link>
      </Button>
    );
  }
  const initialName = `${user.firstName?.charAt(0) ?? ''}${user.lastName?.charAt(0) ?? ''}`;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary" className="size-8 rounded-full">
          <Avatar className="size-8">
            <AvatarImage
              src={user.imageUrl}
              alt={user.userName}
              className="object-cover"
            />
            <AvatarFallback>{initialName}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">
              {user.firstName} {user.lastName}
            </p>
            <p className="text-sm leading-none text-muted-foreground">
              {user.email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem asChild>
            <Link to="#">
              <Icons.dashboard className="size-4 mr-2" aria-hidden="true" />
              Dashboard
              <DropdownMenuShortcut>⇧⌘D</DropdownMenuShortcut>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link to="#">
              <Icons.gear className="size-4 mr-2" aria-hidden="true" />
              Settings
              <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            {/* <Link to="/login">
          <Icons.exit className='size-4 mr-2' aria-hidden='true' />
          Log out
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </Link> */}
            <Form method="post" action="/logout">
              <button type="submit" className="w-full flex justify-between">
                {' '}
                <Icons.exit className="size-4 mr-4" aria-hidden="true" />
                Log out
                <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
              </button>
            </Form>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default AuthDropdown;
