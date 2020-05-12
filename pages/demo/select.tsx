import React from 'react';
import { Flex, Box, Text, Select, Option, Switch, OptionGroup } from '@modulz/radix';

const fruits = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'grapefruit', label: 'Grapefruit' },
  { value: 'mandarin', label: 'Mandarin' },
  { value: 'mango', label: 'Mango' },
  { value: 'mangosteen', label: 'Mangosteen' },
  { value: 'strawberry', label: 'Strawberry' },
];

const vegetables = [
  { value: 'aubergine', label: 'Aubergine' },
  { value: 'broccoli', label: 'Broccoli' },
  { value: 'carrot', label: 'Carrot' },
  { value: 'courgette', label: 'Courgette' },
  { value: 'leek', label: 'Leek' },
];

const meat = [
  { value: 'beef', label: 'Beef' },
  { value: 'chicken', label: 'Chicken' },
  { value: 'lamb', label: 'Lamb' },
  { value: 'pork', label: 'Pork' },
];

export const foods: Array<{
  label?: string;
  options: Array<{ value: string; label: string; disabled?: boolean }>;
}> = [
  {
    label: 'Fruits',
    options: fruits,
  },
  {
    label: 'Vegetables',
    options: vegetables,
  },
  {
    label: 'Meat',
    options: meat,
  },
];

function SelectDemo() {
  const [isNative, setIsNative] = React.useState(false);
  const [showLongList, setShowLongList] = React.useState(false);

  return (
    <Flex
      sx={{
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        width: '100vw',
      }}
    >
      <Box ml={4} mt={3} sx={{ position: 'fixed', top: 0, left: 0 }}>
        <Flex as="label" mb={1} sx={{ alignItems: 'center' }}>
          <Label>Grouped options</Label>
          <Switch checked={showLongList} onChange={(event) => setShowLongList(event.target.checked)} />
        </Flex>

        <Flex as="label" mb={1} sx={{ alignItems: 'center' }}>
          <Label>Native fallback</Label>
          <Switch checked={isNative} onChange={(event) => setIsNative(event.target.checked)} />
        </Flex>
      </Box>

      <Select isNative={isNative}>
        {showLongList
          ? foods.map((group) => (
              <OptionGroup key={group.label} label={group.label}>
                {group.options.map((option) => (
                  <Option key={option.value} label={option.label} value={option.value} />
                ))}
              </OptionGroup>
            ))
          : vegetables.map((option) => <Option key={option.value} label={option.label} value={option.value} />)}
      </Select>
    </Flex>
  );
}

export default SelectDemo;

const Label = (props) => (
  <Text mr={2} {...props} sx={{ whiteSpace: 'nowrap', userSelect: 'none', flex: '1', ...props.sx }} />
);
