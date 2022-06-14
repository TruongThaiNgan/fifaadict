import {
  Button,
  Card, CardContent, CardHeader, InputBase, Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';

type VipDiscount = {
  svip: Boolean,
  vip: Boolean,
  [key: string] : Boolean
}

type CouponDiscount = {
  cp10: Boolean,
  cp20: Boolean,
  cp30: Boolean,
  [key: string] : Boolean
}

const CalculatorMini : React.FC<any> = () => {
  const [pcDiscount, setPcDiscount] = useState<Boolean>(false);
  const [vipDiscount, setVipDiscount] = useState<VipDiscount>({ svip: false, vip: false });
  const [cpDiscount, setCPDiscount] = useState<CouponDiscount>({ cp10: false, cp20: false, cp30: false });
  const [valueInput, setValueInput] = useState<string>('');
  const [result, setResult] = useState<Number>(0);

  useEffect(() => {
    if (!valueInput) {
      setResult(0);
    } else {
      const cal : number = (Number(valueInput) * 60) / 100;
      let val = cal;
      if (pcDiscount) {
        val += (cal * 10) / 100;
      }
      if (vipDiscount.svip) {
        val += (cal * 20) / 100;
      } else if (vipDiscount.vip) {
        val += (cal * 10) / 100;
      }
      if (cpDiscount.cp30) {
        val += (cal * 30) / 100;
      }
      if (cpDiscount.cp20) {
        val += (cal * 20) / 100;
      } else if (cpDiscount.cp10) {
        val += (cal * 10) / 100;
      }

      setResult(Math.round(val));
    }
  }, [pcDiscount, vipDiscount, cpDiscount, valueInput]);

  const handleSetVipDiscount = (name : string, value : Boolean) => {
    const objVipDiscount : VipDiscount = { ...vipDiscount };
    if (vipDiscount.svip && name === 'vip' && value === true) {
      objVipDiscount.svip = false;
    } else if (vipDiscount.vip && name === 'svip' && value === true) {
      objVipDiscount.vip = false;
    }

    objVipDiscount[name] = value;
    setVipDiscount(objVipDiscount);
  };

  const handleSetCPDiscount = (name : string, value : Boolean) => {
    const objCPDiscount : CouponDiscount = { ...cpDiscount };
    if (value === true) {
      if ((cpDiscount.cp10 || cpDiscount.cp20) && name === 'cp30') {
        objCPDiscount.cp10 = false;
        objCPDiscount.cp20 = false;
      } else if ((cpDiscount.cp20 || cpDiscount.cp30) && name === 'cp10') {
        objCPDiscount.cp20 = false;
        objCPDiscount.cp30 = false;
      } else if ((cpDiscount.cp30 || cpDiscount.cp10) && name === 'cp20') {
        objCPDiscount.cp30 = false;
        objCPDiscount.cp10 = false;
      }
    }

    objCPDiscount[name] = value;
    setCPDiscount(objCPDiscount);
  };

  return (
    <Card className="section calculator">
      <CardHeader title="Calculator" />
      <CardContent>
        <InputBase
          className="input-value"
          placeholder="Value"
          inputProps={{ 'aria-label': 'search google maps' }}
          type="number"
          value={valueInput}
          onChange={(e) => { setValueInput(e.target.value); }}
        />
        <Typography className="label">
          Discount
        </Typography>
        <div>
          <div>
            <Button
              className={pcDiscount ? 'btn-choose__discount' : 'btn__discount'}
              onClick={() => { setPcDiscount(!pcDiscount); }}
            >
              PC 10%
            </Button>
          </div>
          <div>
            <Button
              className={vipDiscount.svip ? 'btn-choose__discount' : 'btn__discount'}
              onClick={() => { handleSetVipDiscount('svip', !vipDiscount.svip); }}
            >
              SVIP 20%

            </Button>
            <Button
              className={vipDiscount.vip ? 'btn-choose__discount' : 'btn__discount'}
              onClick={() => { handleSetVipDiscount('vip', !vipDiscount.vip); }}
            >
              VIP 10%

            </Button>
          </div>
          <div>
            <Button
              className={cpDiscount.cp30 ? 'btn-choose__discount' : 'btn__discount'}
              onClick={() => { handleSetCPDiscount('cp30', !cpDiscount.cp30); }}
            >
              CP 30%

            </Button>
            <Button
              className={cpDiscount.cp20 ? 'btn-choose__discount' : 'btn__discount'}
              onClick={() => { handleSetCPDiscount('cp20', !cpDiscount.cp20); }}
            >
              CP 20%

            </Button>
            <Button
              className={cpDiscount.cp10 ? 'btn-choose__discount' : 'btn__discount'}
              onClick={() => { handleSetCPDiscount('cp10', !cpDiscount.cp10); }}
            >
              CP 10%

            </Button>
          </div>
        </div>
        <Typography className="label">
          Result
        </Typography>
        <Typography className="result">
          {`${result}`}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CalculatorMini;
