import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Icons } from '@/components/Icons';
import { useState } from 'react';
import { Loader2 } from 'lucide-react';

const emailSchema = z.object({
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
});

export default function NewsLetterForm() {
  const [loading, setLoading] = useState(false);
  const form = useForm<z.infer<typeof emailSchema>>({
    resolver: zodResolver(emailSchema), //combine validation rule
    defaultValues: {
      email: '',
    },
  });

  function onSubmit(values: z.infer<typeof emailSchema>) {
    setLoading(true);
    console.log(values);
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid w-full pr-0"
        autoComplete="off"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="relative space-y-">
              <FormLabel className="sr-only">Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="furniture@gmail.com"
                  {...field}
                  className=""
                />
              </FormControl>
              <FormMessage />
              <Button
                size="icon"
                className="absolute top-[4px] right-[3.5px] size-7 z-20"
              >
                {loading ? (
                  <Loader2 className="animate-spin" />
                ) : (
                  <Icons.paperPlane className="size-3" aria-hidden="true" />
                )}
                <span className="sr-only">Join newsletter</span>
              </Button>
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
