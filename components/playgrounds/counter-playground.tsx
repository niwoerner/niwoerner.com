"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function CounterPlayground() {
  const [count, setCount] = useState(0);

  return (
    <Card>
      <CardContent className="flex flex-col items-center gap-4 py-8">
        <div className="text-5xl font-bold tabular-nums">{count}</div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={() => setCount((c) => c - 1)}>
            -1
          </Button>
          <Button variant="outline" onClick={() => setCount(0)}>
            Reset
          </Button>
          <Button variant="outline" onClick={() => setCount((c) => c + 1)}>
            +1
          </Button>
        </div>
        <p className="text-sm text-muted-foreground">
          Click the buttons to change the count
        </p>
      </CardContent>
    </Card>
  );
}
