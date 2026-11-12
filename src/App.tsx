import { Box, Flex } from '@semcore/ui/base-components';
import BulkTextarea from '@semcore/ui/bulk-textarea';
import Button from '@semcore/ui/button';
import { Text } from '@semcore/ui/typography';
import React from 'react';

const validateRow = (line: string) => {
  let isValid = true;
  let errorMessage = '';

  if (line.match(/[[\].?!#@]/)) {
    isValid = false;
    errorMessage = 'Please remove special characters';
  }

  return {
    isValid,
    errorMessage,
  };
};

const lineProcessing = (line: string) => {
  return line.replace(/http:\/\//, '');
};

const Demo = () => {
  const [value, setValue] = React.useState('');

  return (
    <Box>
      <BulkTextarea
        w={400}
        value={value}
        onChange={setValue}
        lineValidation={validateRow}
        maxLines={10}
        size='l'
        linesDelimiters={[',']}
        readonly={false}
        disabled={false}
        placeholder='Enter or paste a list using comma or Enter'
        minRows={2}
        maxRows={10}
        validateOn={['blur']}
        pasteProps={{
          delimiter: '\n',
          skipEmptyLines: true,
          lineProcessing,
        }}
        lineProcessing={lineProcessing}
      >
        <Flex alignItems='center' justifyContent='flex-start' mb={2} gap={1}>
          <Text tag='label' size={300} id='keywords-label'>
            Favorite movies
          </Text>
          <BulkTextarea.Counter />
        </Flex>
        <BulkTextarea.InputField
          aria-labelledby='keywords-label'
          commonErrorMessage='Please enter correct movie names.'
        />
        <Flex alignItems='center' justifyContent='space-between' mt={2}>
          <BulkTextarea.ErrorsNavigation />
          <BulkTextarea.ClearAll />
        </Flex>
      </BulkTextarea>
      <Button size='l'>Save</Button>
    </Box>
  );
};

export default Demo;