import { Button } from "@mantine/core";

interface CustomButtonProps {
    label: string;
    onClick: () => void;
    variant?: 'filled' | 'outline' | 'light';
}

const CustomButton: React.FC<CustomButtonProps> = ({ label, onClick, variant = 'filled' }) => {
    return (
        <Button 
            variant={variant}
            color="blue"
            onClick={onClick}
        >
            {label}
        </Button>
    )
}

export default CustomButton;