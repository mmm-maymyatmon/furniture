import Footer from '@/components/layouts/Footer';
import Header from '@/components/layouts/Header';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Link } from 'react-router';
import { motion } from 'framer-motion';
import { Icons } from '@/components/icons';

function Error() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />
      <main className="flex flex-1 items-center justify-center p-6 mt-15">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="w-[400px] shadow-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-2xl text-center p-6">
            <CardHeader>
              <motion.div
                initial={{ rotate: -10 }}
                animate={{ rotate: 0 }}
                transition={{ duration: 0.5 }}
                className="flex justify-center"
              >
                <Icons.exclamation
                  className="size-14 text-red-500"
                  aria-hidden="true"
                />
              </motion.div>
              <CardTitle className="text-2xl font-bold mt-4">Oops!</CardTitle>
              <CardDescription className="text-gray-600 dark:text-gray-300">
                An error occurs accidentally.
              </CardDescription>
            </CardHeader>
            <CardFooter className="flex justify-center mt-2">
              <Button
                variant="outline"
                asChild
                className="px-6 py-2 rounded-lg"
              >
                <Link to="/">Go to Home Page</Link>
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}

export default Error;
