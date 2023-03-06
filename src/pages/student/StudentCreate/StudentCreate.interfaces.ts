import React from 'react';

export interface StudentCreateProps {
	onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
