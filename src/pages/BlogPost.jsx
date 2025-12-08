import { useParams, Link } from 'react-router-dom';
import { Container, Typography, Button, Avatar } from '@mui/material';
import { motion } from 'framer-motion';
import { FaArrowLeft } from 'react-icons/fa';

export default function BlogPost() {
    const { id } = useParams();

    // Placeholder data - in a real app, fetch data based on ID
    const title = "The Future of Web Development in 2024";
    const author = "Sarah Chen";
    const date = "March 15, 2024";
    const image = "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80";

    return (
        <div className="bg-white dark:bg-gray-950 min-h-screen py-16">
            <Container maxWidth="md">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    <Link to="/freelancerhub/app/v1/blog" className="inline-block mb-8">
                        <Button startIcon={<FaArrowLeft />} className="!text-gray-600 dark:!text-gray-400">
                            Back to Blog
                        </Button>
                    </Link>

                    <Typography variant="h2" className="font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                        {title}
                    </Typography>

                    <div className="flex items-center gap-4 mb-8">
                        <Avatar src="https://i.pravatar.cc/150?u=sarah" />
                        <div>
                            <Typography className="font-bold text-gray-900 dark:text-white">{author}</Typography>
                            <Typography className="text-gray-500 text-sm">{date}</Typography>
                        </div>
                    </div>

                    <motion.img
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        src={image}
                        alt="Blog post cover"
                        className="w-full h-auto rounded-2xl mb-12 shadow-lg"
                    />

                    <div className="prose dark:prose-invert max-w-none text-lg text-gray-700 dark:text-gray-300">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">Embracing AI in Code</h3>
                        <p>
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <p className="mt-4">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                        </p>
                        <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">The Rise of Edge Computing</h3>
                        <p>
                            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
                        </p>
                    </div>
                </motion.div>
            </Container>
        </div>
    );
}
