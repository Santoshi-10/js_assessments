// src/components/SuspenseComponent.js
import React, { Suspense, lazy } from 'react';

// Lazy load SomeComponent
const SomeComponent = lazy(() => import('./SomeComponent'));

// SuspenseComponent to handle lazy loading
function SuspenseComponent() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <SomeComponent />
      </Suspense>
    </div>
  );
}

export default SuspenseComponent;
