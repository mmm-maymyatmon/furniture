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
import { useState } from 'react';
import { Loader2 } from 'lucide-react';
import { Icons } from './icons';

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
            <FormItem className="relative space-y-0">
              <FormLabel className="sr-only">Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="furniture@gmail.com"
                  {...field}
                  className="bg-[#2a5452] p-6 rounded-3xl"
                />
              </FormControl>
              <FormMessage />
              <Button
                size="icon"
                className="absolute top-[10px] right-[15px] size-7 z-20 bg-white hover:bg-orange-300"
              >
                {loading ? (
                  <Loader2 className="animate-spin text-[#2a5452]" />
                ) : (
                  <Icons.paperPlane className="size-3 text-[#2a5452]" aria-hidden="true" />
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
