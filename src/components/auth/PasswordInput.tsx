import * as React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '../ui/button';
import { EyeNoneIcon, EyeOpenIcon } from '@radix-ui/react-icons';
import { Input } from '../ui/input';

function PasswordInput({
    className,
    ...props
  }: React.ComponentProps<'input'>) {
    const [showPassword, setShowPassword] = React.useState(false);
    const [inputValue, setInputValue] = React.useState('');
  
    return (
      <div className='relative'>
        <Input
          type={showPassword ? 'text' : 'password'}
          data-slot="input"
          {...props}
          className={cn("pr-10", className)}
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
            props.onChange?.(e);
          }}
        />
        <Button
          type="button"
          variant="ghost"
          size="sm"
          className='absolute top-0 right-0 h-full px-2 py-1 hover:bg-transparent'
          onClick={() => setShowPassword(!showPassword)}
          disabled={inputValue === '' || props.disabled}
        >
          {showPassword ? (
            <EyeNoneIcon className='h-4 w-4' aria-hidden="true" />
          ) : (
            <EyeOpenIcon className='h-4 w-4' aria-hidden="true" />
          )}
          <span className='sr-only'>
            {showPassword ? "Hide password" : "Show password"}
          </span>
        </Button>
      </div>
    );
  }
  

export default PasswordInput;
