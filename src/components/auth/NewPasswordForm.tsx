import { Link, useActionData, useNavigation, useSubmit } from 'react-router';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { cn } from '@/lib/utils';

import { Button } from '@/components/ui/button';
import { Icons } from '@/components/icons';
import PasswordInput from './PasswordInput';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useState } from 'react';

const FormSchema = z.object({
  password: z
    .string()
    .min(8, 'Password must be 8 digits.')
    .max(8, 'Password must be 8 digits.')
    .regex(/^\d+$/, 'Password must be numbers'),
  confirmPassword: z
    .string()
    .min(8, 'Password must be 8 digits.')
    .max(8, 'Password must be 8 digits.')
    .regex(/^\d+$/, 'Password must be numbers'),
});

export function NewPasswordForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) {
  const submit = useSubmit();
  const navigation = useNavigation();
  const actionData = useActionData() as {
    error?: string;
    message?: string;
  };

  const [clientError, setClientError] = useState<string | null>(null);

  const isSubmitting = navigation.state === 'submitting';

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
        password: '',
        confirmPassword: '',
    },
  });

  function onSubmit(values: z.infer<typeof FormSchema>) {
    if (values.password !== values.confirmPassword) { 
      setClientError('New Passwords do not match.');
      return;
    }
    setClientError(null);
    // console.log(values);
    submit(values, { method: 'post', action: '/reset/new-password' });
  }
  return (
    <div className={cn('flex flex-col gap-6', className)} {...props}>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center gap-2">
            <Link
              to="/"
              className="flex flex-col items-center gap-2 font-medium"
            >
              <div className="flex items-center justify-center rounded-md">
              <Icons.logo className="size-10 bg-emeraldGreen text-white p-2 rounded-md" aria-hidden="true" />
              </div>
              <span className="sr-only">New Password</span>
            </Link>
            <h1 className="text-xl font-bold">Change new password.</h1>
            <div className="text-center text-sm">
              Password must be 8 digits and numbers only.They must match.
        
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-4"
                  autoComplete="off"
                >
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>New Password</FormLabel>
                        <FormControl>
                          <PasswordInput
                            required
                            // minLength={8}
                            // maxLength={8}
                            inputMode="numeric"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                                  />
                                  <FormField
                    control={form.control}
                    name="confirmPassword"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Confirm New Password</FormLabel>
                        <FormControl>
                          <PasswordInput
                            required
                            // minLength={8}
                            // maxLength={8}
                            inputMode="numeric"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  {actionData && (
                    <div className='flex gap-2'>
                      <p className="text-xs text-red-400">{actionData.message}</p>
                    <Link
                      to="/login" className='text-xs underline underline-offset-4' >Go back to Login</Link>
                    </div>
                  )}
                  {clientError && (
                    <p className="text-xs text-red-400">{clientError}</p>
                  )}
                  <div className="grid gap-4">
                    <Button type="submit" className="mt-2 w-full">
                      {isSubmitting ? (
                        <div className="flex items-center justify-center">
                          <svg
                            className="animate-spin h-5 w-5 mr-3 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                            ></path>
                          </svg>
                          Submitting...
                        </div>
                      ) : (
                        'Change'
                      )}
                    </Button>
                  </div>
                </form>
              </Form>
            </div>
          </div>
        </div>
    </div>
  );
}
