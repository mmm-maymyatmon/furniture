import { Link, useActionData, useNavigation, useSubmit } from 'react-router';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { cn } from '@/lib/utils';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Icons } from '@/components/icons';

import {
  Form,
  FormControl,
  //FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

const FormSchema = z.object({
  phone: z
    .string()
    .min(7, 'Phone number is too short')
    .max(12, 'Phone number is too long')
    .regex(/^\d+$/, 'Phone number must be numbers'),
});

export function ResetPasswordFrom({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) {
  const submit = useSubmit();
  const navigation = useNavigation();
  const actionData = useActionData() as {
    error?: string;
    message?: string;
  };

  const isSubmitting = navigation.state === 'submitting';

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      phone: '',
    },
  });

  function onSubmit(values: z.infer<typeof FormSchema>) {
    // console.log(values);
    submit(values, { method: 'post', action: '.' });
  }
  return (
    <div className={cn('flex flex-col gap-6', className)} {...props}>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center gap-2">
            <Link to="/"
              className="flex flex-col items-center gap-2 font-medium"
            >
              <div className="flex items-center justify-center rounded-md">
              <Icons.logo className="size-10 bg-emeraldGreen text-white p-2 rounded-md" aria-hidden="true" />
              </div>
              <span className="sr-only"></span>
            </Link>
            <h1 className="text-xl font-bold">Reset Password</h1>
            <div className="text-center text-sm">
              Remember your password? { ""}
              <a href="/login" className="underline underline-offset-4">
                Sign In
              </a>
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
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input
                            type="tel"
                            placeholder="0924**********"
                            required
                            // minLength={7}
                            // maxLength={12}
                            inputMode="numeric"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  {actionData && (
                    <p className="text-xs text-red-400">{actionData.message}</p>
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
                        'Reset'
                      )}
                    </Button>
                  </div>
                </form>
              </Form>
            </div>
          </div>
        </div>
      <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary  ">
        By clicking continue, you agree to our{' '}
        <Link to="#">Terms of Service</Link>
        and <Link to="#">Privacy Policy</Link>.
      </div>
    </div>
  );
}
