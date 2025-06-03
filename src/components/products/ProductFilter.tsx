import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import type { Category } from '@/types';

interface FilterProps {
  categories: Category[];
  types: Category[] 
}

interface ProductFilterProps {
  filterList: FilterProps;
  selectedCategory: string[];
  selectedType: string[];
  onFilterChange: (category: string[], type: string[]) => void;
}

const FormSchema = z.object({
  categories: z
    .array(z.string()),
    // .refine((value) => value.some((item) => item), {
    //   message: 'You have to select at least one categories.',
    // }),
  types: z.array(z.string())
  //   .refine((value) => value.some((item) => item), {
  //   message: 'You have to select at least one types.',
  // }),
});

function ProductFilter({ filterList, selectedCategory, selectedType, onFilterChange }: ProductFilterProps) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      categories: selectedCategory,
      types: selectedType,
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    // Uncomment this if you want toast notification
    // toast({
    //   title: "You submitted the following values:",
    //   description: (
    //     <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
    //       <code className="text-white">{JSON.stringify(data, null, 2)}</code>
    //     </pre>
    //   ),
    // })
    // console.log('Submitted Data:', data);
    onFilterChange(data.categories, data.types);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="categories"
          render={() => (
            <FormItem>
              <FormLabel className="text-base">Furniture Made By</FormLabel>
              <div className="space-y-2 mt-2">
                {filterList.categories.map((item) => (
                  <FormField
                    key={item.id}
                    control={form.control}
                    name="categories"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                             checked={field.value.includes(item.id.toString())}
                             onCheckedChange={(checked) => {
                               const id = item.id.toString();
                               return checked
                                 ? field.onChange([...field.value, id])
                                 : field.onChange(
                                     field.value.filter((value) => value !== id)
                                   );
                            }}
                          />
                        </FormControl>
                        <FormLabel className="text-sm font-normal">
                          {item.name}
                        </FormLabel>
                      </FormItem>
                    )}
                  />
                ))}
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="types"
          render={() => (
            <FormItem>
              <FormLabel className="text-base">Furniture Type</FormLabel>
              <div className="space-y-2 mt-2">
                {filterList.types.map((item) => (
                  <FormField
                    key={item.id}
                    control={form.control}
                    name="types"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value.includes(item.id.toString())}
                            onCheckedChange={(checked) => {
                              const id = item.id.toString();
                              return checked
                                ? field.onChange([...field.value, id])
                                : field.onChange(
                                    field.value.filter((value) => value !== id)
                                  );
                            }}
                          />
                        </FormControl>
                        <FormLabel className="text-sm font-normal">
                          {item.name}
                        </FormLabel>
                      </FormItem>
                    )}
                  />
                ))}
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" variant="outline">
          Filter
        </Button>
      </form>
    </Form>
  );
}

export default ProductFilter;
