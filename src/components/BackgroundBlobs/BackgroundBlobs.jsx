function randomBetween(min, max) {
    return Math.round((min + Math.random() * (max - min)) * 10) / 10
}

function randomBlobVars() {
    return {
        '--dx1': `${randomBetween(-26, 26)}%`, '--dy1': `${randomBetween(-26, 26)}%`,
        '--ds1': randomBetween(0.7, 1.4), '--dr1': `${randomBetween(-50, 50)}deg`,
        '--dx2': `${randomBetween(-26, 26)}%`, '--dy2': `${randomBetween(-26, 26)}%`,
        '--ds2': randomBetween(0.7, 1.4), '--dr2': `${randomBetween(-50, 50)}deg`,
        '--dx3': `${randomBetween(-26, 26)}%`, '--dy3': `${randomBetween(-26, 26)}%`,
        '--ds3': randomBetween(0.7, 1.4), '--dr3': `${randomBetween(-50, 50)}deg`,
    }
}

const blobConfigs = [
    { size: 460, top: '3%', right: '8%', gradient: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))', drift: '17s', morph: '12s', hue: '16s' },
    { size: 300, top: '17%', left: '6%', gradient: 'linear-gradient(150deg, var(--color-secondary), var(--color-primary))', drift: '16s', morph: '14s', hue: '18s' },
    { size: 340, top: '31%', right: '10%', gradient: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))', drift: '18s', morph: '12s', hue: '14s' },
    { size: 380, top: '45%', left: '4%', gradient: 'linear-gradient(150deg, var(--color-secondary), var(--color-primary))', drift: '21s', morph: '15s', hue: '19s' },
    { size: 400, top: '59%', right: '6%', gradient: 'linear-gradient(210deg, var(--color-primary), var(--color-secondary-soft))', drift: '15s', morph: '10s', hue: '14s' },
    { size: 330, top: '73%', left: '8%', gradient: 'linear-gradient(95deg, var(--color-secondary-soft), var(--color-primary))', drift: '19s', morph: '12s', hue: '16s' },
    { size: 280, top: '87%', right: '10%', gradient: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))', drift: '16s', morph: '13s', hue: '15s' },

    { size: 140, top: '3%', left: '8%', gradient: 'linear-gradient(150deg, var(--color-secondary), var(--color-primary))', drift: '14s', morph: '11s', hue: '13s' },
    { size: 120, top: '17%', right: '6%', gradient: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))', drift: '13s', morph: '10s', hue: '15s' },
    { size: 130, top: '31%', left: '10%', gradient: 'linear-gradient(150deg, var(--color-secondary), var(--color-primary))', drift: '15s', morph: '11s', hue: '12s' },
    { size: 150, top: '45%', right: '4%', gradient: 'linear-gradient(210deg, var(--color-primary), var(--color-secondary-soft))', drift: '17s', morph: '13s', hue: '16s' },
    { size: 140, top: '59%', left: '6%', gradient: 'linear-gradient(95deg, var(--color-secondary-soft), var(--color-primary))', drift: '12s', morph: '9s', hue: '11s' },
    { size: 120, top: '73%', right: '8%', gradient: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))', drift: '16s', morph: '11s', hue: '14s' },
    { size: 110, top: '87%', left: '10%', gradient: 'linear-gradient(150deg, var(--color-secondary), var(--color-primary))', drift: '14s', morph: '10s', hue: '13s' },
]

export default function BackgroundBlobs() {
    return (
        <div className="background-layer" aria-hidden="true">
            {blobConfigs.map((b, i) => (
                <span
                    key={i}
                    className="organic-blob"
                    style={{
                        width: b.size,
                        height: b.size,
                        top: b.top,
                        left: b.left,
                        right: b.right,
                        bottom: b.bottom,
                        background: b.gradient,
                        '--drift-duration': b.drift,
                        '--morph-duration': b.morph,
                        '--hue-duration': b.hue,
                        ...randomBlobVars(),
                    }}
                />
            ))}
        </div>
    )
}